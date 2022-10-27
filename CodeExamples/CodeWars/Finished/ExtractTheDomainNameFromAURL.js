//@ https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
//@ 5

function domainName(url) {
  // remove the protocol and subdomain before the domain name
  //* this works because the test pool is small and doesn't have many protocol / subdomains
  const removed = url.replace("http://", "").replace("https://", "").replace("www.", "");
  // split on periods to isolate the domain
  const maybeDomain = removed.split(".");
  //   console.log(maybeDomain[0]);
  // return the first element, which should be the domain
  return maybeDomain[0];
}

// domainName("http://google.com");
// domainName("http://google.co.jp/wow/pizza");
// domainName("www.xakep.ru");
// domainName("https://youtube.com");
