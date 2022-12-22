function fecthWithAuth(url: string, method: 'post' | 'get') {
  console.log(url);
}

fecthWithAuth('https://ups.com', 'post');

let method = 'post';

fecthWithAuth('https://ups.com', method as 'post');
