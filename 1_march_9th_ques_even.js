// Device Constructor
function Device(name, type, status = "off") {
    this.name = name;
    this.type = type;
    this.status = status;
  }
  
  // Device Methods
  Device.prototype.turnOn = function () {
    this.status = "on";
    console.log(`${this.name} is now ON.`);
  };
  
  Device.prototype.turnOff = function () {
    this.status = "off";
    console.log(`${this.name} is now OFF.`);
  };
  
  Device.prototype.checkStatus = function () {
    console.log(`${this.name} is currently ${this.status}.`);
  };
  
  // Smart Home Constructor
  function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
  }
  
  // Smart Home Methods
  SmartHome.prototype.addDevice = function (device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s smart home.`);
  };
  
  SmartHome.prototype.removeDevice = function (deviceName) {
    this.devices = this.devices.filter((device) => device.name !== deviceName);
    console.log(`${deviceName} removed from ${this.owner}'s smart home.`);
  };
  
  SmartHome.prototype.listDevices = function () {
    console.log(`${this.owner}'s Smart Home Devices:`);
    this.devices.forEach((device) => console.log(`- ${device.name} (${device.type})`));
  };
  
  // Smart Device (inherits from Device)
  function SmartDevice(name, type, brand, connectivity) {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
  }
  
  // Inherit from Device
  SmartDevice.prototype = Object.create(Device.prototype);
  SmartDevice.prototype.constructor = SmartDevice;
  
  // Smart Device Methods
  SmartDevice.prototype.updateFirmware = async function () {
    console.log(`Checking for firmware update for ${this.name}...`);
    try {
      const response = await fetch("https://api.example.com/firmware-update"); // Mock API
      const data = await response.json();
      console.log(`Firmware update successful: ${data.message}`);
    } catch (error) {
      console.log(`Firmware update failed: ${error.message}`);
    }
  };
  
  SmartDevice.prototype.checkConnectivity = function () {
    console.log(`${this.name} is connected via ${this.connectivity}.`);
  };
  
  // Smart Light (inherits from SmartDevice)
  function SmartLight(name, brand, connectivity, brightness = 50, color = "white") {
    SmartDevice.call(this, name, "Smart Light", brand, connectivity);
    this.brightness = brightness;
    this.color = color;
  }
  
  // Inherit from SmartDevice
  SmartLight.prototype = Object.create(SmartDevice.prototype);
  SmartLight.prototype.constructor = SmartLight;
  
  // Smart Light Methods
  SmartLight.prototype.setBrightness = function (level) {
    this.brightness = level;
    console.log(`${this.name}'s brightness set to ${level}%.`);
  };
  
  SmartLight.prototype.setColor = function (color) {
    this.color = color;
    console.log(`${this.name} color changed to ${color}.`);
  };
  
  // Smart Thermostat (inherits from SmartDevice)
  function SmartThermostat(name, brand, connectivity, temperature = 22, mode = "cool") {
    SmartDevice.call(this, name, "Smart Thermostat", brand, connectivity);
    this.temperature = temperature;
    this.mode = mode;
  }
  
  // Inherit from SmartDevice
  SmartThermostat.prototype = Object.create(SmartDevice.prototype);
  SmartThermostat.prototype.constructor = SmartThermostat;
  
  // Smart Thermostat Methods
  SmartThermostat.prototype.setTemperature = function (temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${temp}°C.`);
  };
  
  SmartThermostat.prototype.setMode = function (mode) {
    this.mode = mode;
    console.log(`${this.name} mode set to ${mode}.`);
  };
  
  // User Constructor
  function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username);
  }
  
  // User Methods
  User.prototype.authenticate = async function () {
    console.log(`Authenticating ${this.username}...`);
    try {
      const response = await fetch("https://api.example.com/authenticate", {
        method: "POST",
        body: JSON.stringify({ username: this.username, password: this.password }),
      });
      const data = await response.json();
      console.log(`Authentication successful: ${data.message}`);
    } catch (error) {
      console.log(`Authentication failed: ${error.message}`);
    }
  };
  
  User.prototype.addDeviceToHome = function (device) {
    this.smartHome.addDevice(device);
  };
  
  User.prototype.removeDeviceFromHome = function (deviceName) {
    this.smartHome.removeDevice(deviceName);
  };
  
  // Demonstration
  (async function () {
    const user1 = new User("Alice", "securepassword");
  
    // Authenticate User
    await user1.authenticate();
  
    // Create Smart Devices
    const light = new SmartLight("Living Room Light", "Philips", "WiFi", 75, "warm white");
    const thermostat = new SmartThermostat("Nest Thermostat", "Google", "Zigbee", 24, "heat");
  
    // Add devices to user's smart home
    user1.addDeviceToHome(light);
    user1.addDeviceToHome(thermostat);
  
    // List devices in smart home
    user1.smartHome.listDevices();
  
    // Device Actions
    light.setBrightness(90);
    light.setColor("blue");
    thermostat.setTemperature(22);
    thermostat.setMode("eco");
  
    // Firmware Update Simulation
    await light.updateFirmware();
    await thermostat.updateFirmware();
  
    // Check Connectivity
    light.checkConnectivity();
    thermostat.checkConnectivity();
  
    // Remove a device
    user1.removeDeviceFromHome("Living Room Light");
    user1.smartHome.listDevices();
  })();
  