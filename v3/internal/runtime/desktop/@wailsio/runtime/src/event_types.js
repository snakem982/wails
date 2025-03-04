
export const EventTypes = {
	Windows: {
		SystemThemeChanged: "windows:SystemThemeChanged",
		APMPowerStatusChange: "windows:APMPowerStatusChange",
		APMSuspend: "windows:APMSuspend",
		APMResumeAutomatic: "windows:APMResumeAutomatic",
		APMResumeSuspend: "windows:APMResumeSuspend",
		APMPowerSettingChange: "windows:APMPowerSettingChange",
		ApplicationStarted: "windows:ApplicationStarted",
		WebViewNavigationCompleted: "windows:WebViewNavigationCompleted",
		WindowInactive: "windows:WindowInactive",
		WindowActive: "windows:WindowActive",
		WindowClickActive: "windows:WindowClickActive",
		WindowMaximise: "windows:WindowMaximise",
		WindowUnMaximise: "windows:WindowUnMaximise",
		WindowFullscreen: "windows:WindowFullscreen",
		WindowUnFullscreen: "windows:WindowUnFullscreen",
		WindowRestore: "windows:WindowRestore",
		WindowMinimise: "windows:WindowMinimise",
		WindowUnMinimise: "windows:WindowUnMinimise",
		WindowClose: "windows:WindowClose",
		WindowSetFocus: "windows:WindowSetFocus",
		WindowKillFocus: "windows:WindowKillFocus",
		WindowDragDrop: "windows:WindowDragDrop",
		WindowDragEnter: "windows:WindowDragEnter",
		WindowDragLeave: "windows:WindowDragLeave",
		WindowDragOver: "windows:WindowDragOver",
		WindowDidMove: "windows:WindowDidMove",
		WindowDidResize: "windows:WindowDidResize",
	},
	Mac: {
		ApplicationDidBecomeActive: "mac:ApplicationDidBecomeActive",
		ApplicationDidChangeBackingProperties: "mac:ApplicationDidChangeBackingProperties",
		ApplicationDidChangeEffectiveAppearance: "mac:ApplicationDidChangeEffectiveAppearance",
		ApplicationDidChangeIcon: "mac:ApplicationDidChangeIcon",
		ApplicationDidChangeOcclusionState: "mac:ApplicationDidChangeOcclusionState",
		ApplicationDidChangeScreenParameters: "mac:ApplicationDidChangeScreenParameters",
		ApplicationDidChangeStatusBarFrame: "mac:ApplicationDidChangeStatusBarFrame",
		ApplicationDidChangeStatusBarOrientation: "mac:ApplicationDidChangeStatusBarOrientation",
		ApplicationDidFinishLaunching: "mac:ApplicationDidFinishLaunching",
		ApplicationDidHide: "mac:ApplicationDidHide",
		ApplicationDidResignActiveNotification: "mac:ApplicationDidResignActiveNotification",
		ApplicationDidUnhide: "mac:ApplicationDidUnhide",
		ApplicationDidUpdate: "mac:ApplicationDidUpdate",
		ApplicationWillBecomeActive: "mac:ApplicationWillBecomeActive",
		ApplicationWillFinishLaunching: "mac:ApplicationWillFinishLaunching",
		ApplicationWillHide: "mac:ApplicationWillHide",
		ApplicationWillResignActive: "mac:ApplicationWillResignActive",
		ApplicationWillTerminate: "mac:ApplicationWillTerminate",
		ApplicationWillUnhide: "mac:ApplicationWillUnhide",
		ApplicationWillUpdate: "mac:ApplicationWillUpdate",
		ApplicationDidChangeTheme: "mac:ApplicationDidChangeTheme!",
		ApplicationShouldHandleReopen: "mac:ApplicationShouldHandleReopen!",
		WindowDidBecomeKey: "mac:WindowDidBecomeKey",
		WindowDidBecomeMain: "mac:WindowDidBecomeMain",
		WindowDidBeginSheet: "mac:WindowDidBeginSheet",
		WindowDidChangeAlpha: "mac:WindowDidChangeAlpha",
		WindowDidChangeBackingLocation: "mac:WindowDidChangeBackingLocation",
		WindowDidChangeBackingProperties: "mac:WindowDidChangeBackingProperties",
		WindowDidChangeCollectionBehavior: "mac:WindowDidChangeCollectionBehavior",
		WindowDidChangeEffectiveAppearance: "mac:WindowDidChangeEffectiveAppearance",
		WindowDidChangeOcclusionState: "mac:WindowDidChangeOcclusionState",
		WindowDidChangeOrderingMode: "mac:WindowDidChangeOrderingMode",
		WindowDidChangeScreen: "mac:WindowDidChangeScreen",
		WindowDidChangeScreenParameters: "mac:WindowDidChangeScreenParameters",
		WindowDidChangeScreenProfile: "mac:WindowDidChangeScreenProfile",
		WindowDidChangeScreenSpace: "mac:WindowDidChangeScreenSpace",
		WindowDidChangeScreenSpaceProperties: "mac:WindowDidChangeScreenSpaceProperties",
		WindowDidChangeSharingType: "mac:WindowDidChangeSharingType",
		WindowDidChangeSpace: "mac:WindowDidChangeSpace",
		WindowDidChangeSpaceOrderingMode: "mac:WindowDidChangeSpaceOrderingMode",
		WindowDidChangeTitle: "mac:WindowDidChangeTitle",
		WindowDidChangeToolbar: "mac:WindowDidChangeToolbar",
		WindowDidChangeVisibility: "mac:WindowDidChangeVisibility",
		WindowDidDeminiaturize: "mac:WindowDidDeminiaturize",
		WindowDidEndSheet: "mac:WindowDidEndSheet",
		WindowDidEnterFullScreen: "mac:WindowDidEnterFullScreen",
		WindowDidEnterVersionBrowser: "mac:WindowDidEnterVersionBrowser",
		WindowDidExitFullScreen: "mac:WindowDidExitFullScreen",
		WindowDidExitVersionBrowser: "mac:WindowDidExitVersionBrowser",
		WindowDidExpose: "mac:WindowDidExpose",
		WindowDidFocus: "mac:WindowDidFocus",
		WindowDidMiniaturize: "mac:WindowDidMiniaturize",
		WindowDidMove: "mac:WindowDidMove",
		WindowDidOrderOffScreen: "mac:WindowDidOrderOffScreen",
		WindowDidOrderOnScreen: "mac:WindowDidOrderOnScreen",
		WindowDidResignKey: "mac:WindowDidResignKey",
		WindowDidResignMain: "mac:WindowDidResignMain",
		WindowDidResize: "mac:WindowDidResize",
		WindowDidUpdate: "mac:WindowDidUpdate",
		WindowDidUpdateAlpha: "mac:WindowDidUpdateAlpha",
		WindowDidUpdateCollectionBehavior: "mac:WindowDidUpdateCollectionBehavior",
		WindowDidUpdateCollectionProperties: "mac:WindowDidUpdateCollectionProperties",
		WindowDidUpdateShadow: "mac:WindowDidUpdateShadow",
		WindowDidUpdateTitle: "mac:WindowDidUpdateTitle",
		WindowDidUpdateToolbar: "mac:WindowDidUpdateToolbar",
		WindowDidUpdateVisibility: "mac:WindowDidUpdateVisibility",
		WindowShouldClose: "mac:WindowShouldClose!",
		WindowWillBecomeKey: "mac:WindowWillBecomeKey",
		WindowWillBecomeMain: "mac:WindowWillBecomeMain",
		WindowWillBeginSheet: "mac:WindowWillBeginSheet",
		WindowWillChangeOrderingMode: "mac:WindowWillChangeOrderingMode",
		WindowWillClose: "mac:WindowWillClose",
		WindowWillDeminiaturize: "mac:WindowWillDeminiaturize",
		WindowWillEnterFullScreen: "mac:WindowWillEnterFullScreen",
		WindowWillEnterVersionBrowser: "mac:WindowWillEnterVersionBrowser",
		WindowWillExitFullScreen: "mac:WindowWillExitFullScreen",
		WindowWillExitVersionBrowser: "mac:WindowWillExitVersionBrowser",
		WindowWillFocus: "mac:WindowWillFocus",
		WindowWillMiniaturize: "mac:WindowWillMiniaturize",
		WindowWillMove: "mac:WindowWillMove",
		WindowWillOrderOffScreen: "mac:WindowWillOrderOffScreen",
		WindowWillOrderOnScreen: "mac:WindowWillOrderOnScreen",
		WindowWillResignMain: "mac:WindowWillResignMain",
		WindowWillResize: "mac:WindowWillResize",
		WindowWillUnfocus: "mac:WindowWillUnfocus",
		WindowWillUpdate: "mac:WindowWillUpdate",
		WindowWillUpdateAlpha: "mac:WindowWillUpdateAlpha",
		WindowWillUpdateCollectionBehavior: "mac:WindowWillUpdateCollectionBehavior",
		WindowWillUpdateCollectionProperties: "mac:WindowWillUpdateCollectionProperties",
		WindowWillUpdateShadow: "mac:WindowWillUpdateShadow",
		WindowWillUpdateTitle: "mac:WindowWillUpdateTitle",
		WindowWillUpdateToolbar: "mac:WindowWillUpdateToolbar",
		WindowWillUpdateVisibility: "mac:WindowWillUpdateVisibility",
		WindowWillUseStandardFrame: "mac:WindowWillUseStandardFrame",
		MenuWillOpen: "mac:MenuWillOpen",
		MenuDidOpen: "mac:MenuDidOpen",
		MenuDidClose: "mac:MenuDidClose",
		MenuWillSendAction: "mac:MenuWillSendAction",
		MenuDidSendAction: "mac:MenuDidSendAction",
		MenuWillHighlightItem: "mac:MenuWillHighlightItem",
		MenuDidHighlightItem: "mac:MenuDidHighlightItem",
		MenuWillDisplayItem: "mac:MenuWillDisplayItem",
		MenuDidDisplayItem: "mac:MenuDidDisplayItem",
		MenuWillAddItem: "mac:MenuWillAddItem",
		MenuDidAddItem: "mac:MenuDidAddItem",
		MenuWillRemoveItem: "mac:MenuWillRemoveItem",
		MenuDidRemoveItem: "mac:MenuDidRemoveItem",
		MenuWillBeginTracking: "mac:MenuWillBeginTracking",
		MenuDidBeginTracking: "mac:MenuDidBeginTracking",
		MenuWillEndTracking: "mac:MenuWillEndTracking",
		MenuDidEndTracking: "mac:MenuDidEndTracking",
		MenuWillUpdate: "mac:MenuWillUpdate",
		MenuDidUpdate: "mac:MenuDidUpdate",
		MenuWillPopUp: "mac:MenuWillPopUp",
		MenuDidPopUp: "mac:MenuDidPopUp",
		MenuWillSendActionToItem: "mac:MenuWillSendActionToItem",
		MenuDidSendActionToItem: "mac:MenuDidSendActionToItem",
		WebViewDidStartProvisionalNavigation: "mac:WebViewDidStartProvisionalNavigation",
		WebViewDidReceiveServerRedirectForProvisionalNavigation: "mac:WebViewDidReceiveServerRedirectForProvisionalNavigation",
		WebViewDidFinishNavigation: "mac:WebViewDidFinishNavigation",
		WebViewDidCommitNavigation: "mac:WebViewDidCommitNavigation",
		WindowFileDraggingEntered: "mac:WindowFileDraggingEntered",
		WindowFileDraggingPerformed: "mac:WindowFileDraggingPerformed",
		WindowFileDraggingExited: "mac:WindowFileDraggingExited",
	},
	Linux: {
		SystemThemeChanged: "linux:SystemThemeChanged",
		WindowLoadChanged: "linux:WindowLoadChanged",
		WindowDeleteEvent: "linux:WindowDeleteEvent",
		WindowDidMove: "linux:WindowDidMove",
		WindowDidResize: "linux:WindowDidResize",
		WindowFocusIn: "linux:WindowFocusIn",
		WindowFocusOut: "linux:WindowFocusOut",
		ApplicationStartup: "linux:ApplicationStartup",
	},
	Common: {
		ApplicationStarted: "common:ApplicationStarted",
		WindowMaximise: "common:WindowMaximise",
		WindowUnMaximise: "common:WindowUnMaximise",
		WindowFullscreen: "common:WindowFullscreen",
		WindowUnFullscreen: "common:WindowUnFullscreen",
		WindowRestore: "common:WindowRestore",
		WindowMinimise: "common:WindowMinimise",
		WindowUnMinimise: "common:WindowUnMinimise",
		WindowClosing: "common:WindowClosing",
		WindowZoom: "common:WindowZoom",
		WindowZoomIn: "common:WindowZoomIn",
		WindowZoomOut: "common:WindowZoomOut",
		WindowZoomReset: "common:WindowZoomReset",
		WindowFocus: "common:WindowFocus",
		WindowLostFocus: "common:WindowLostFocus",
		WindowShow: "common:WindowShow",
		WindowHide: "common:WindowHide",
		WindowDPIChanged: "common:WindowDPIChanged",
		WindowFilesDropped: "common:WindowFilesDropped",
		WindowRuntimeReady: "common:WindowRuntimeReady",
		ThemeChanged: "common:ThemeChanged",
		WindowDidMove: "common:WindowDidMove",
		WindowDidResize: "common:WindowDidResize",
		ApplicationOpenedWithFile: "common:ApplicationOpenedWithFile",
	},
};
