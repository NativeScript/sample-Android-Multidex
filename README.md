# How to build and test

* Restore the platforms folder
```Shell
tns build android
```

* Get a fat library

  * If you have **node.js** installed run the following commands:
  ```Shell
  npm install forever -g
  forever start -o ../platforms/android/src/main/java/com/tns/RedundantClassNameWithTooManyMethods.java app/64kPlusMethodGenerator.js
  ```

  * If you DON'T have **node.js** you can copy the fat .java file instead
  ```Shell
  $ cp app/App_Resources/Android/RedundantClassNameWithTooManyMethods.java platforms/android/src/main/java/com/tns/
  ```

* Finally run the application
```Shell
tns run android
```

* The result of the build will be in the build folder.
* Preview the resulting .apk in `build/outputs/apk/` to ensure that it contains at least 2 `classes(..N).dex` files