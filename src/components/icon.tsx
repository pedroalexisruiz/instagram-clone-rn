import { Image, ImageStyle, StyleProp, TouchableOpacity } from "react-native";

export const Icon = ({
  imgStyle,
  imgUrl,
}: {
  imgStyle: StyleProp<ImageStyle>;
  imgUrl: string;
}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);
