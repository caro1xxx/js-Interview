// method 1
if (JSON.stringify(obj) === '{}') {
  return false
}
return true
// method 2
for (var i in obj) {
  return true;
}
return false;
// method 3
Object.keys()