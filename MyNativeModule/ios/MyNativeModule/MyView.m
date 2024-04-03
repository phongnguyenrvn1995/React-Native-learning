//
//  MyView.m
//  MyNativeModule
//
//  Created by Phong Nguyễn Hoàng on 26/03/2024.
//
#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(MyViewManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(backGroundColor, NSInteger)
  RCT_EXPORT_VIEW_PROPERTY(mySrc, NSString)
  RCT_EXPORT_VIEW_PROPERTY(myArr, NSArray)
@end
