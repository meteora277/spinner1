const spinner2 = function(arr = ["|", "/", "-", "\\","|", "/", "-", "\\"]) {
  if (arr[0] !== undefined) {
    setTimeout(() => {
      let firstChar = arr.shift();
      process.stdout.write("\r" + firstChar + "    ");
      return spinner2(arr);
    },200);
  }
};
spinner2();