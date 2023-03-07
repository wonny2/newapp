import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function press() {
    console.log("콘솔 클릭");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // {pressed}는 네이티브 기본 설정이다. 해석) pressed되면 true가 되고, pressed하지 않으면 false이다.
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={press}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

// 스타일을 [배열]로 설정하면 여러 스타일을 적용할 수 있다.
// 13번줄 처럼 하면 pressed할 때(눌렀을 때) true가 되면서 2개의 styles을 적용할 수 있다.

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    // 이 부분은 오직 안드로이드에서 android_ripple부분 때문에 만든 부분
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // 안드로이드에서만 적용되는 "그림자효과"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

// <Pressable> 태그로 감싸주면 onPress에 해당 컴포넌트를 클릭했을 때 실행하고자 하는 함수를 넣어주면 된다.
