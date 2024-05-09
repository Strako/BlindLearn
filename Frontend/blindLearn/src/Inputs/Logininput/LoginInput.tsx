interface LoginInputProps{
    voiceString: string
}

const LoginInput = ({voiceString}: LoginInputProps) => {
    //agreagr input custom
    return (
    <>
    <input type="string" value={voiceString}/>
    </>
    );
};
  export default LoginInput;


