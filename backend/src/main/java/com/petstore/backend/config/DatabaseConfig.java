package com.petstore.backend.config;

import javax.sql.DataSource;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.URI;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {
        String databaseUrl = System.getenv("DATABASE_URL");
        HikariDataSource ds = new HikariDataSource();

        if (databaseUrl != null && !databaseUrl.isEmpty()) {
            // Render provides DATABASE_URL in format: postgresql://user:pass@host:port/dbname
            // JDBC requires: jdbc:postgresql://host:port/dbname
            try {
                URI uri = new URI(databaseUrl);
                String jdbcUrl = "jdbc:postgresql://" + uri.getHost()
                        + (uri.getPort() > 0 ? ":" + uri.getPort() : "")
                        + uri.getPath();
                String[] userInfo = uri.getUserInfo().split(":");
                
                ds.setJdbcUrl(jdbcUrl);
                ds.setUsername(userInfo[0]);
                ds.setPassword(userInfo.length > 1 ? userInfo[1] : "");
                ds.setDriverClassName("org.postgresql.Driver");
            } catch (Exception e) {
                throw new RuntimeException("Failed to parse DATABASE_URL: " + e.getMessage(), e);
            }
        } else {
            // Local dev: use H2 in-memory database
            ds.setJdbcUrl("jdbc:h2:mem:petstore;DB_CLOSE_DELAY=-1");
            ds.setUsername("sa");
            ds.setPassword("");
            ds.setDriverClassName("org.h2.Driver");
        }

        return ds;
    }
}
