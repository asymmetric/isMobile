describe("Amazon", function(){
  var mobile;
  var userAgent;

  beforeEach(function() {
    mobile = null;
    userAgent = null;
  });

  describe("Tablet UserAgent", function() {
    describe("2nd generation", function() {
      beforeEach(function() {
        userAgent = "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; KFTHWI Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.22 like Chrome/34.0.1847.137 Safari/537.36";
        mobile = new isMobile.Class(userAgent);
      });

      it("should be an Amazon device", function() {
        expect(mobile.amazon.device).toBe(true);
      });
    });

    describe("1st generation", function() {
      beforeEach(function() {
        userAgent = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true";
        mobile = new isMobile.Class(userAgent);
      });

      it("should be an Amazon device", function() {
        expect(mobile.amazon.device).toBe(true);
      });
    });
  });

  describe("Mobile UserAgent", function() {
    describe("2nd generation", function() {
      beforeEach(function() {
        userAgent = "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; KFTHWI Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.22 like Chrome/34.0.1847.137 Mobile Safari/537.36";
        mobile = new isMobile.Class(userAgent);
      });

      it("should be an Amazon device", function() {
        expect(mobile.amazon.device).toBe(true);
      });
    });

    describe("1st generation", function() {
      beforeEach(function() {
        userAgent = "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 Silk-Accelerated=true";
        mobile = new isMobile.Class(userAgent);
      });

      it("should be an Amazon device", function() {
        expect(mobile.amazon.device).toBe(true);
      });
    });
  });

  describe("Desktop UserAgent", function() {
    beforeEach(function() {
      userAgent = "Mozilla/5.0 (X11; Linux x86_64; U; en-us) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.22 like Chrome/34.0.1847.137 Safari/537.36";
      mobile = new isMobile.Class(userAgent);
    });

    it("should be an Amazon device", function() {
      expect(mobile.amazon.device).toBe(true);
    });
  });
});
