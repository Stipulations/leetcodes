function lengthOfLongestSubstring(s: string): number {
    let seen = new Map();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) {
            start = Math.max(start, seen.get(s[i]) + 1);
        }
        seen.set(s[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};