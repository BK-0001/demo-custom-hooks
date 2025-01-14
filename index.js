const id = setTimeout(() => {
  console.log("this will run after 1 sec");
}, 2000);

clearTimeout(id);
