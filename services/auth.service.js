import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("google");
    localStorage.removeItem("fb");
  }



  getFullname() {
    if (localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.name;
        return fname;
      }
    } else if (localStorage.getItem("google")) {
      const loggedInUser = localStorage.getItem("google");
      if (localStorage.getItem("google")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.fname + " " + foundUser.user.lname;
        return fname;
      }
    }else {
      const loggedInUser = localStorage.getItem("fb");
      if (localStorage.getItem("fb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.fname + " " + foundUser.user.lname;
        return fname;
      }
    }
  }

  getId() {
    if (localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.id;
        return fname;
      }
    }else if (localStorage.getItem("google")) {
      const loggedInUser = localStorage.getItem("google");
      if (localStorage.getItem("google")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.id;
        return fname;
      }
    }else {
      const loggedInUser = localStorage.getItem("fb");
      if (localStorage.getItem("fb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.user.id;
        return fname;
      }
    }
  }

  getToken() {
    if(localStorage.getItem("token")) {
      const loggedInUser = localStorage.getItem("token");
      if (localStorage.getItem("token")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.token;
        return fname;
      }
    }else if (localStorage.getItem("google")) {
      const loggedInUser = localStorage.getItem("google");
      if (localStorage.getItem("google")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.token;
        return fname;
      }
    } else {
      const loggedInUser = localStorage.getItem("fb");
      if (localStorage.getItem("fb")) {
        const foundUser = JSON.parse(loggedInUser);
        const fname = foundUser.token;
        return fname;
      }
    }
  }

  checkLogin() {
    const loggedInUser = localStorage.getItem("token");
    const loggedInUserFb = localStorage.getItem("fb");
    const loggedInUsergoogle = localStorage.getItem("google");
    if (loggedInUserFb) {
      const foundUser = JSON.parse(loggedInUser);

      $(".colMain").hide();
      $(".colLogin").hide();
      $(".colDeliver").show();
      console.log(foundUser);
    }
  }
}

export default new AuthService();
