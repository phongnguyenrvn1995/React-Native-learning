//
//  MyViewManager.swift
//  MyNativeModule
//
//  Created by Phong Nguyễn Hoàng on 26/03/2024.
//

import React

@objc(MyViewManager)
class MyViewManager: RCTViewManager {
    
  override func view() -> UIView! {
    print("PHONG")
    return MyView()
  }

  override class func requiresMainQueueSetup() -> Bool {
    true
  }
}
