export const backgroundSwitch = (background) => {
    switch (background) {
        case "01d":
            return require("../assets/images/clear.jpg");
        case "01n":
            return require("../assets/images/clear.jpg");
        case "02d":
            return require("../assets/images/cloudy.jpg");
        case "02n":
            return require("../assets/images/cloudy.jpg");
        case "03d":
            return require("../assets/images/cloudy.jpg");
        case "03n":
            return require("../assets/images/cloudy.jpg");
        case "04d":
            return require("../assets/images/cloudy.jpg");
        case "04n":
            return require("../assets/images/cloudy.jpg");
        case "09d":
            return require("../assets/images/rain.jpg");
        case "09n":
            return require("../assets/images/rain.jpg");
        case "10d":
            return require("../assets/images/rain.jpg");
        case "10n":
            return require("../assets/images/rain.jpg");
        case "11d":
            return require("../assets/images/rain.jpg");
        case "11n":
            return require("../assets/images/rain.jpg");
        case "13d":
            return require("../assets/images/snow.jpg");
        case "13n":
            return require("../assets/images/snow.jpg");
        case "50d":
            return require("../assets/images/fog.jpg");
        case "50n":
            return require("../assets/images/fog.jpg");
        default:
            return require("../assets/images/clear.jpg");
    }
}