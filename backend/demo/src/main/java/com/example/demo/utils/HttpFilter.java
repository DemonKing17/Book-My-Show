package com.example.demo.utils;

import com.example.demo.service.UserService;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class HttpFilter implements Filter {
    @Autowired
    UserService userService;
    String register = "/cinehub/v1/users/register";
    String login = "/cinehub/v1/users/login";

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        final String path = httpServletRequest.getRequestURI();
        System.out.println(path);
        if (path.equals(register) || path.equals(login)) {
            System.out.println("Inside auth skip");
            filterChain.doFilter(servletRequest,servletResponse);
            return;
        } else {
            final String token = httpServletRequest.getHeader("token");
            if (token == null) {
                ((HttpServletResponse) servletResponse).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }

            boolean isValid = userService.isUserValid(token);
            if (isValid) {
                filterChain.doFilter(servletRequest,servletResponse);
            } else {
                ((HttpServletResponse) servletResponse).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }
        }
        filterChain.doFilter(servletRequest,servletResponse);
    }
}
