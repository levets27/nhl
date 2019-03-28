// todo - probably delete this entire thing
export const fetchData = apiUrl => {
  return fetch(apiUrl).then(results => {
    return results.json();
  });
};

export const checkImage = (imagePath, callback) => {
  var img = new Image();
  img.onload = function() {
    callback(true);
  };
  img.onerror = function() {
    callback(false);
  };
  img.src = imagePath;
};

export const imageExists = imagePath => {
  var image = new Image();
  image.src = imagePath;

  /*  if (!image.complete) {
    console.log("!image.complete");
    return false;
  } else  */ if (
    image.height === 0
  ) {
    console.log("image.height === 0");
    return false;
  }

  return true;
};
