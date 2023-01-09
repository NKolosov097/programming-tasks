import { ipToInt, intToIp } from '../solution.js';

const addresses = [
  ['0.0.0.0', 0],
  ['255.255.255.255', 4294967295],
  ['0.0.0.32', 32],
  ['128.32.10.1', 2149583361],
  ['128.114.17.104', 2154959208],
  ['192.0.0.112', 3221225584],
  ['10.0.115.0', 167801600],
];

test.each(addresses)('test#1 convert IPv4 to Integer #%#', (ip, int) => {
  expect(ipToInt(ip)).toBe(int);
});

test.each(addresses)('test#2 convert Integer to IPv4 #%#', (ip, int) => {
  expect(intToIp(int)).toBe(ip);
});
