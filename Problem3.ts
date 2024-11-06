{
  //

  function countWordOccurrences(sentance: string, word: string): number {
    let splitSentence: string[] = sentance.toLowerCase().split(' ');
    const result: string[] = splitSentence.filter(
      item => item === word.toLowerCase()
    );
    return result.length;
  }
  // console.log(
  //   countWordOccurrences('TypeScript is great. I love TypeScript', 'Typescript')
  // );
  //
}
