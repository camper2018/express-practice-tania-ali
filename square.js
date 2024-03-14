// exports.area = function (width) {
//     return width * width;
//   };
// exports.perimeter = function (width) {
//     return 4 * width;
// };
// module.exports = {
//     area(width) {
//       return width * width;
//     },
  
//     perimeter(width) {
//       return 4 * width;
//     },
// };

class Square {
    constructor() {

    }
    area(width) {
        return width * width;
    };
          
    perimeter(width) {
        return 4 * width;
    };
}
// We can also make the root of the exports object a constructor 
module.exports = Square;
  
  