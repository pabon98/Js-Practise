const paymentSuccess = true;

const marks = 80;

function Enroll() {
  console.log("Course enrollment is in progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
  return promise;
}

function Progress() {
  console.log("Course on Progress");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    });
  });
  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Congrats! you got the certificate");
    }, 1000);
  });
  return promise;
}

// Enroll()
//   .then(Progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function(error){
//     console.log(error)
//   })

async function course() {
  try {
    await Enroll();
    await Progress();
    const message = await getCertificate();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
course();

