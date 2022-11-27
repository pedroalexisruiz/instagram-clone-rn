import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Comment, Post as PostInterface } from "../../mocks/posts";
import { Icon } from "../icon";
import { PostHeader } from "./postHeader";

const POST_FOOTER_ICONS = [
  {
    name: "Like",
    url: "https://img.icons8.com/fluency-systems-regular/60/ffffff/heart.png",
  },
  {
    name: "Comment",
    url: "https://img.icons8.com/fluency-systems-regular/60/ffffff/speech-bubble.png",
  },
  {
    name: "Share",
    url: "https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png",
  },
  {
    name: "Save",
    url: "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon.png",
  },
];

const PostFooter = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <Icon imgStyle={styles.icon} imgUrl={POST_FOOTER_ICONS[0].url} />
          <Icon imgStyle={styles.icon} imgUrl={POST_FOOTER_ICONS[1].url} />
          <Icon
            imgStyle={[styles.icon, styles.shareIcon]}
            imgUrl={POST_FOOTER_ICONS[2].url}
          />
        </View>
        <Icon imgStyle={styles.icon} imgUrl={POST_FOOTER_ICONS[3].url} />
      </View>
      {children}
    </View>
  );
};

const Likes = ({ likes }: { likes: number }) => (
  <Text style={styles.userName}>{likes.toLocaleString("en")} likes</Text>
);

const CommentsSection = ({ comments }: { comments: Comment[] }) => (
  <Text style={{ color: "gray", marginLeft: 10 }}>
    View {comments.length > 1 ? "all" : ""} {comments.length} comment
    {comments.length > 1 ? "s" : ""}
  </Text>
);

const CaptionSection = ({ post }: PostProps) => (
  <View style={{ flexDirection: "row", marginVertical: 15 }}>
    <Text style={styles.userName}>{post.user.user}</Text>
    <Text style={styles.postText}>{post.title}</Text>
  </View>
);

const Post = ({ post }: PostProps) => {
  return (
    <View style={styles.postContainer}>
      <PostHeader user={post.user} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: post.imageUrl }} />
      </View>
      <PostFooter>
        <Likes likes={post.likes} />
        <CaptionSection post={post} />
        <Text style={styles.postText}>{post.caption}</Text>
        {post.comments.length && <CommentsSection comments={post.comments} />}
      </PostFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { height: "100%", resizeMode: "cover" },
  imageContainer: { width: "100%", height: 500 },
  postContainer: {
    paddingTop: 10,
  },
  userName: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "700",
  },
  postText: {
    color: "white",
    fontSize: 16,
    paddingLeft: 10,
  },
  icon: { width: 30, height: 30 },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
});

interface PostProps {
  post: PostInterface;
}

export default Post;
