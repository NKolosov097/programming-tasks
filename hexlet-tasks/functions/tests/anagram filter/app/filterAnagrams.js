export const filterAnagrams = (str, arr) => {
    const convert = (str) => str.split('').sort().join('');
    const normal = convert(str);
  
    return arr.filter(item => convert(item) === normal);
  };
  