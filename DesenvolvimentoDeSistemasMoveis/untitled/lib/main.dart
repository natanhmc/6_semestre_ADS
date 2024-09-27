import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Hello World",
          ),
        ),
        body: Column(children: [
          Image.network(
              "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          Row(
            children: [
              Column(
                children: [Text("Texto um",), Text("Texto um")],
              ),
              Row(
                children: [
                  Icon(Icons.star, color: Colors.red,),
                  Text("41")
                ],
              ),
            ],
          ),
        ]),
      ),
    );
  }
}
