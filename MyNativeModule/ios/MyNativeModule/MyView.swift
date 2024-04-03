//
//  MyView.swift
//  MyNativeModule
//
//  Created by Phong Nguyễn Hoàng on 26/03/2024.
//

import UIKit

class MyView: UIImageView {
  override func didMoveToWindow() {
    contentMode = .scaleAspectFit
  }
  
  @objc var backGroundColor: Int = 0 {
    didSet {
      if backGroundColor == 0 {
        backgroundColor = .blue
      } else {
        backgroundColor = .green
      }
    }
  }
  
  @objc var mySrc: String = "" {
    didSet {
      if mySrc == "medie" {
        image = UIImage(named: "medie")
      } else {
        image = UIImage(named: "soul-time")
      }
    }
  }
  
  @objc var myArr: NSArray = [] {
    didSet{
      print(myArr)
    }
  }
}
