package in.stackroute.userprofile.model;

import org.springframework.security.crypto.password.PasswordEncoder;

public class UserCredentials {
    private String email;
    private String password;

    PasswordEncoder passwordEncoder;



    public UserCredentials() {
    }

    public UserCredentials(String email, String password) {

        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
