package com.tns;

@com.tns.JavaScriptImplementation(javaScriptFile = "./MultiDexApp.js")
public class NativeScriptMultiDexApp extends android.app.Application implements com.tns.NativeScriptHashCodeProvider {
	private static android.app.Application thiz;

	public NativeScriptMultiDexApp(){
		super();
		thiz = this;
	}

	public void onCreate()  {
		new RuntimeHelper(this).initRuntime();
		if (!Runtime.isInitialized()) {
			super.onCreate();
			return;
		}
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onCreate", void.class, args);
	}

	protected void attachBaseContext(android.content.Context param_0)  {
		if (!Runtime.isInitialized()) {
			super.attachBaseContext(param_0);
			return;
		}
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "attachBaseContext", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

	public static android.app.Application getInstance() {
		return thiz;
	}
}
