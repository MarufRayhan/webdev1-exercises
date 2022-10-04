for (let li of document.querySelectorAll("li")) {
  // get the title from the text node
  let title = li.firstChild.data;

  title = title.trim(); // remove extra spaces from ends

  // get the descendants count
  let count = li.getElementsByTagName("li").length;
  //   let items = li.getElementsByTagName("li");
  //   console.log(items);

  //   for (var i = 0, size = items.length; i < size; i++) {
  //     items[i].innerHTML = items.childNodes;
  //   }
  if (count > 0) {
    li.firstChild.data = title + " (" + count + ")";
  } else {
    // console.log(title);
  }
}
