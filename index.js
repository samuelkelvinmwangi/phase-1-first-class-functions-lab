const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(driver){
    driver = drivers.splice(2, 0);
    return driver;
}