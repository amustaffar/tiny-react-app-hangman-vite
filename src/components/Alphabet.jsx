const Alphabet = () => {
  // characters need to be at least 7 characs
  // get a separate file with all the words
  // try the first word first...
  const word = "RANDOM";
  let answer = "";
  const indexes = Array.from(Array(26)).map((char, index) => index + 65);
  const alphabets = indexes.map((num) => String.fromCharCode(num));

  return (
    <div>
      {alphabets.map((alphabet, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              console.log("hi");
            }}
          >
            {alphabet}
          </button>
        );
      })}
    </div>
  );
};

export default Alphabet;
