android.app.Application.extend("com.tns.NativeScriptMultiDexApp", {
	onCreate: function() {
	},
	attachBaseContext: function(base) {
		this.super.attachBaseContext(base);
		android.support.multidex.MultiDex.install(this.super);
	}
});