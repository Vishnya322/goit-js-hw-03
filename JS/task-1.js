function slugify(title) {
    const slug = title.split(" ");
    const newtitle = slug.join("-");
    return newtitle.toLowerCase(); 
}


console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 