import 'package:flutter/material.dart';
import 'package:loginuicolors/register.dart';
void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: MyRegister(),
    routes: {
      'register': (context) => MyRegister(),
    },
  ));
}