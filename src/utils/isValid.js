const isValid = {
  mobileFormat: /^[0-9\b]+$/,
  emailFormat:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/,
  validPasswordLength: function (value) {
    if (value.length < 8) {
      return true;
    }
  },
  validPhone: function (value) {
    if (this.mobileFormat.test(value) == false) {
      return true;
    }
  },
  validPhoneLength: function (value) {
    if (value.length < 10 || value.length > 10) {
      return true;
    }
  },
  validEmail: function (value) {
    if (this.emailFormat.test(value) == false) {
      return true;
    }
  },
  isEmpty: function (value) {
    if (value == '' || value == null) {
      return true;
    }
  },
};

export default isValid;
