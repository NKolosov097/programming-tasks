function isIsogram(str){
    const lng = str.length;
    str = str.toLowerCase();
    
    for (let i = 0; i < lng; i++) 
      for (let j = i + 1; j < lng; j++) 
        if (str[i] === str[j]) return false;
    return true;
  }