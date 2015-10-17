package com.thack.tcs.config;  
  
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
  
@Configuration
@ComponentScan("com.thack.tcs")
@EnableWebMvc   
public class Config extends WebMvcConfigurerAdapter {  
      
    /**
     * Initializing view resolver
     * 
     * @return the view resolver object
     */
    @Bean
    public ViewResolver getViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/jsp/");
        resolver.setSuffix(".html");
        return resolver;
    }

    /**
     * Adding static resources to handler.
     */
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }

    /**
     * 
     * {@inheritDoc}
     */
    @Override
    public void configureDefaultServletHandling(final DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
    
    /*
     * @Override public void addResourceHandlers(final ResourceHandlerRegistry registry) { registry.addResourceHandler("/resources/**").addResourceLocations("/WEB-INF/resources/*"); }
     */
}  
