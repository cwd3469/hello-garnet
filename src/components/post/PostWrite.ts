const newDivElement = document.createElement("div");

type Prop = {
  title?: string;
  contents?: string;
};

class PostWrite {
  title?: string;
  contents?: string;
  // createAt: Date;
  constructor(params: Prop) {
    this.title = params.title;
    this.contents = params.contents;
  }
  onSubmit = (e: any) => {
    console.log(e);
  };
  render = () => {
    return `<form onsubmit="alert('submit!');return false">
    <label for="name">닉네임 :</label>
    <input type="text" name="name" id="name">
  
    <label for="email">이메일 :</label>
    <input type="email" name="email" id="email">
  
    <label for="password">비밀번호 :</label>
    <input type="password" name="password" id="password">
  
    <button >제출</button>
  </form>`;
  };
}

export { PostWrite };
