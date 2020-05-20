var express = require('express');
var router = express.Router();

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sem nibh. Suspendisse ornare accumsan metus eget maximus. Sed suscipit molestie pellentesque. Morbi varius fermentum urna, bibendum dapibus odio fermentum at. Mauris rutrum justo dui, auctor sagittis enim suscipit ut. Vestibulum gravida dui quam, sit amet porta tortor malesuada id. Praesent ut pharetra sapien. Praesent sit amet consectetur lorem. Nam at mi non sapien efficitur porttitor vel quis nulla. Praesent pulvinar, ligula non molestie cursus, purus turpis tincidunt sem, eu sollicitudin ligula libero eget est. Cras dignissim tortor ante, et tincidunt odio dictum eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend ante ac neque aliquet, at gravida lectus ultrices. Quisque id nulla neque. <br> Sed quis mi at purus dictum volutpat. Aenean a malesuada risus, ut pulvinar nisl. Donec facilisis pellentesque ex, ut blandit ligula accumsan nec. Aliquam nibh nulla, elementum vitae mattis quis, consectetur et risus. Nullam quis turpis diam. Vestibulum iaculis eros vitae nunc volutpat egestas. Fusce fermentum at leo a ultrices. Nunc sollicitudin, risus non ultrices ultricies, magna urna pharetra lacus, sed vehicula leo quam id risus. Nam elementum sit amet nunc aliquet aliquam"
router.get('/', function (req, res, next) {
  res.render('about', {layout:"layout", content: content });
});

module.exports = router;
