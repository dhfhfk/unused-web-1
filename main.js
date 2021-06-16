document.getElementById("toggleTheme").addEventListener("click", () => {
  const html = document.documentElement;

  if (html.classList.contains("light")) {
      html.classList.remove("light");
      localStorage.setItem("lightTheme", "false");
  } else {
      html.classList.add("light");
      localStorage.setItem("lightTheme", "true");
  }
});

const storedTheme = localStorage.getItem("lightTheme");


if (storedTheme !== null) {
    if (storedTheme === "true") {
        document.documentElement.classList.add("light");
    }
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.classList.add("light");
}

function ping(ip, callback) {

  if (!this.inUse) {
      this.status = 'unchecked';
      this.inUse = true;
      this.callback = callback;
      this.ip = ip;
      var _that = this;
      this.img = new Image();
      this.img.onload = function () {
          _that.inUse = false;
          _that.callback('접속 가능');

      };
      this.img.onerror = function (e) {
          if (_that.inUse) {
              _that.inUse = false;
              _that.callback('접속 가능', e);
          }

      };
      this.start = new Date().getTime();
      this.img.src = "https://" + ip;
      this.timer = setTimeout(function () {
          if (_that.inUse) {
              _that.inUse = false;
              _that.callback('오프라인');
          }
      }, 1500);
  }
}
var PingModel = function (servers) {
  var self = this;
  var myServers = [];
  ko.utils.arrayForEach(servers, function (location) {
      myServers.push({
          name: location,
          status: ko.observable('unchecked')
      });
  });
  self.servers = ko.observableArray(myServers);
  ko.utils.arrayForEach(self.servers(), function (s) {
      s.status('확인중');
      new ping(s.name, function (status, e) {
          s.status(status);
      });
  });
};
var komodel = new PingModel([
  'map1.dhfhfk.kro.kr',
  'map2.dhfhfk.kro.kr'
  ]);
ko.applyBindings(komodel);