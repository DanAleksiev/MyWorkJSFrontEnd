if(Object.values(objectSelectors).some((e) => e.values === "")){
    return;
  }
  // verify that the inputs have values in them


  Object.values(data).forEach((e) => (e.value = ""));
// clear the inputs
