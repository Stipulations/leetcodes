function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let merged: number[] = [];
  let a = 0;
  let b = 0;

  while (a < nums1.length && b < nums2.length) {
    if (nums1[a] < nums2[b]) {
      merged.push(nums1[a]);
      a++;
    } else {
      merged.push(nums2[b]);
      b++;
    }
  }

  while (a < nums1.length) {
    merged.push(nums1[a]);
    a++;
  }

  while (b < nums2.length) {
    merged.push(nums2[b]);
    b++;
  }

  let c = merged.length;
  let middleIndex = c / 2;
  let median =
    c % 2 == 0
      ? (merged[middleIndex - 1] + merged[middleIndex]) / 2
      : merged[Math.round(middleIndex) - 1];

  return median;
}