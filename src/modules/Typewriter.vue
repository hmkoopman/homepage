<template>
  <component :is="tagType" class="typewriter">
    {{ textBefore }}
    <span class="typed-text">{{ typingValue }}</span>
    <span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
  </component>
</template>

<script>
const allowedTags = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"];
export default {
  props: {
    tagType: {
      type: String,
      required: false,
      default: "p",
      validator(tagType) {
        return allowedTags.includes(tagType);
      },
    },
    textBefore: {
      type: String,
      required: false,
    },
    typingArray: {
      type: Array,
      required: true,
    },
    typingSpeed: {
      type: Number,
      required: false,
      default: 200,
    },
    typingReturnSpeed: {
      type: Number,
      required: false,
      default: 50,
    },
  },
  data() {
    return {
      allowedTags: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
      typingValue: "",
      isTyping: false,
      newTextDelay: 2000,
      typingArrayIndex: 0,
      characterIndex: 0,
    };
  },
  created() {
    setTimeout(this.typing, this.newTextDelay);
  },
  methods: {
    typing() {
      if (
        this.characterIndex < this.typingArray[this.typingArrayIndex].length
      ) {
        if (this.isTyping) {
          this.isTyping = false;
        }

        this.typingValue += this.typingArray[this.typingArrayIndex].charAt(
          this.characterIndex
        );
        this.characterIndex += 1;

        setTimeout(this.typing, this.typingSpeed);
      } else {
        this.isTyping = false;

        setTimeout(this.typingReturn, this.newTextDelay);
      }
    },
    typingReturn() {
      if (this.characterIndex > 0) {
        if (!this.isTyping) {
          this.isTyping = true;
        }

        this.typingValue = this.typingArray[this.typingArrayIndex].substring(
          0,
          this.characterIndex - 1
        );
        this.characterIndex -= 1;

        setTimeout(this.typingReturn, this.typingReturnSpeed);
      } else {
        this.isTyping = false;
        this.typingArrayIndex += 1;

        if (this.typingArrayIndex >= this.typingArray.length) {
          this.typingArrayIndex = 0;
        }

        setTimeout(this.typing, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
span.typed-text {
  color: rgba(46, 165, 234, 1);
}
span.cursor {
  display: inline-block;
  margin-left: 0.2rem;
  width: 0.2rem;
  background-color: var(--main-text-color);
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: var(--main-text-color);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
