(function () {
	android.app.Activity.extend("com.tns.MyActivity", {
		MyActivity: function () {
			com.tns.Runtime.initInstance(this);
		},
		onCreate: function (bundle) {
			this.super.onCreate(bundle);
			android.util.Log.d("-----", "It works");

			var layout = new android.widget.LinearLayout(this);
			layout.setOrientation(1);
			this.setContentView(layout);

			var textView = new android.widget.TextView(this);
			textView.setText("Hello!");
			
			textView.setGravity(android.view.Gravity.CENTER);
			textView.setTextSize(50);
			
			layout.addView(textView);
			
			com.tns.RedundantClassNameWithTooManyMethods.Method10001();
		}
	});
})();