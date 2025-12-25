const arr = [1, 2, 1, 3, 5, 8, 2];

const duplicates = [];
const unique = [];

const findDuplicatesAndUnique = (arr) => {
  arr.map((item) => {
    if (!unique.includes(item) && !duplicates.includes(item)) {
      unique.push(item);
    } 
    else if (unique.includes(item) && !duplicates.includes(item)) {
      duplicates.push(item);
    }
  });

  const finalUnique = [];
  for (let i = 0; i < unique.length; i++) {
    if (!duplicates.includes(unique[i])) {
      finalUnique.push(unique[i]);
    }
  }

  console.log({ duplicates });
  console.log({ unique: finalUnique });
};

findDuplicatesAndUnique(arr);
