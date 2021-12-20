const existingFileNames = ["one.txt","one (1).txt","one (2).txt","one (3).txt","one (4).txt"];
const uploadingFileNames = ["one.txt"];

uploadingFileNames.forEach((fileName)=>{
    let fileCounter = 1;
    let splitterArray = fileName.split(".");
    let extension = splitterArray.pop();
    let actualFileName = splitterArray.join("");
    let copyText = "- Copy";
    while (fileNameExists(fileName)) {
        // fileName = actualFileName+" "+copyText+" ("+(fileCounter++)+")"+"."+extension;
        fileName = actualFileName+" ("+(fileCounter++)+")"+"."+extension;
        // console.log('>> fileName', fileName);
        if(fileCounter > 100) break; // to avoid stackoverflow
    }
})

function fileNameExists(name) {
  return existingFileNames.indexOf(name) !== -1;
}


const folders = [
  {
      "id": "147842971317",
      "item": {
          "name": "Pictures",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:05.769",
          "itemCount": 2
      },
      "parentId": "147843687680",
      "paneIndex": 1
  },
  {
      "id": "147844001186",
      "item": {
          "name": "Files",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:09.008",
          "itemCount": 0
      },
      "parentId": "147843687680",
      "paneIndex": 1
  },
  {
      "id": "147843732032",
      "item": {
          "name": "Scans",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:10.103",
          "itemCount": 2
      },
      "parentId": "147843687680",
      "paneIndex": 1
  },
  {
      "id": "147843683727",
      "item": {
          "name": "Folder 1",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:12.436",
          "itemCount": 4
      },
      "parentId": "147843687680",
      "paneIndex": 1
  },
  {
      "id": "147844675200",
      "item": {
          "name": "A1",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:57:45.363",
          "itemCount": 16
      },
      "parentId": "147843687680",
      "paneIndex": 1
  },
  {
      "id": "872019278304",
      "item": {
          "name": "wengang-zhai-_fOL6ebfECQ-unsplash.jpg",
          "isFolder": false,
          "fileSize": 1650652,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/wengang-zhai-_fOL6ebfECQ-unsplash1634101211348.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=532a2d93f72907c8e9c259ee4a5afc53a5e7bdf38edcadb762430f537f8e356f",
          "expirationTime": 1634491215558,
          "thumbnailName": "wengang-zhai-_fOL6ebfECQ-unsplash1634101211348.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!bd96xF3APZcK7Eap4mSUGbhxWeMtSG5LBPfZ8UDBma6w4RYb1YdklwYmB31GUiDSEe3zXPaigTpoRhdLEMRR_lkQSCd_y4k1cqzLmNvTZMcWJYdoO_bJuVmR_1rhD-kIsn1k6I84Lo2HwSQLWBYoFOnZX43xelhKg_RzooIAl59xHDuyMz6CxClllyP8SwZOxh5AR6GHUl6foQP9QauAIbkiinmFL39EI1xLZP-fIAqi18_hfAodpEl41ZskmQ5i0hb0adgIkjRihbiUMibTcWOoWMhc_w2IjvTz6bqA2ZBlmhs-qwMX9KUZGJNmdWVplJd7fBGVxzWU3vEXk3-Afe5bGYFAX1mlonxFmBSTFKLhhHL2BcmoJfnXEC-3NV1qdCbgTKml7OYpmV4QBSnCoBayp-rXhDJRtwc9QYK9fvGWqj0z-b-VDtX_F6bfvh989h4prZBIkEj5fQLr90oCa7LajZUhhojv0JPs2Fjoml3R4z-oJik-IU9e4wR9JjVWtvcNAVUxn_XSNx9sstMcrvbit3u5OH9T_LG1Fh0shiDQvPLMkQHKB_ieIH5OXHS67mldu4kiG6pKeTDe7t2pb4p6_Mu2kfjue4Tu-wGenFR_T9V9EgQgxqIsvvKPCoKV_eoIhPXpaG5K8wUKivfTVl27MTgXK6SKO-214RMioVaqliXh-CXTD7M3NC1ZdefD4XF9HofxtKZpnMFw6NEsh0ImPY-nR-MkOmtDpLQ4ZOEtSn72nXuJZCYEMqdFSkr1nNZ3-9d2HLOfqzbQ3Dkp1TQ6N7yaPDTRUYO-HNALRC5aJadKcicJAhwDU86NU56Gb_uP5rxJYShT1gBS0NB8n8PkNO73yt9ejMynLFKCszRXG3BGu-rLzEE9YgyN3OHsjqUKsUb00yDFv43PLxzVoNb3dS-cjixI-tIupadYT7HsUeTCOxPIglNFuQra6mCNEEEMNLMxEX88zt32rvcrVqz83NjkaadPczQcaD9u3DAwGQ-4qoRdsGB1AeU88S5OgSjDJA1ZNH9l9MnnBzcp-Xs6lEoTk3J2BSYumZxzQx18BcCTEenr0A8E_bzXcYM9lFpbB67Poc9W-DtD_0llC2sW2ypr08qlXIQmz29mjn-roeK92SQ17TGtQ_cI71B5SgmQiUaV8lNuK1iRWdYnHXPvM47r9hWsBgmZsMc_EPnXs4K-QARjW7H64U4nX1oyTFxPGHsXv-gvjH6Ij1ndd06cCqBlk5RsIUvB_sMoprQCv4HVzi1ylzG54zo8JIUwp4nxHea16q0MgVM10VWON_8qq2LUcwOwRU537Mcvt-_anzujqg../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:13.398",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872031270534",
      "item": {
          "name": "andres-jasso-PqbL_mxmaUE-unsplash.jpg",
          "isFolder": false,
          "fileSize": 3381212,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/andres-jasso-PqbL_mxmaUE-unsplash1634101216291.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=c20dfb07c6ca4142d56bdc7dd5e38744d63e8a58c111b06f65eca57b03bc1df6",
          "expirationTime": 1634491215560,
          "thumbnailName": "andres-jasso-PqbL_mxmaUE-unsplash1634101216291.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!V0YP3sksLWV_szsn9ITT2jDwVRY5ZM80P43Wdce5XOxVcOoARUmm4VcMAN0J8F43ihkwkVnJbnHiqkaeqDZx0ij0YhvcmBPwy7B8t5yBEOlRtY8wwBOoyn4yffeGeYgAAjGPEsOnHftbFjbdNlNwIPoJMXcNFNjN6p4_fBYaP0LdHuVmhgd-zVduvO9diikg6qO_pHVCZdDLed8vjA1kaa_VxtJI3V9Cvpn3fqS0Eow5CsQ9yM_2nG0fjt7F-TLIVVw0PKKuwsuEbmdt7XtIcRERbG2hf7J-DPF85-YRXn3eiwduB3UE1N7IlpVTFnATj9wj72Yx_OIgtqvvuFWRbfFmctVNXpC9CgvsObkt-8Mwd77LpcN9kZT_0t634bQG0478Wc4wpf42MYLm12kzeuG-cvIqSV-gxMaPxCIQhyxWSgI2A4Q-uKNZrr_i0NwvHIDJ77cC6C9GkCkNnhOfOnNphwMRoAGm_mf8oXd188hKFbTzg23BVobFrxYjiqRnbvGpvC_t6Cs2ppY79gr_iLV7FixWf_FQegfJaOoXKldaHWiYfqLIu1gyS0R_ErL4vjUwmhWLwj8EWUx3wQ6hCAAWicsxy0aqqYRvJXXL-sc91D3n-gYFQOQPrlouYLmOHJfN9n9vP4I-2NiLEhc76Y7evz9DVaX8XP5weX7cz8vtjKK2mTSC-gIBnoLJjRbDA68G_KppgMNtocyITCpHgzlWCPITtjEkHDMLKpEJPpPcJ6BXn_rrI3fHtXrwIBrjjOFBnVNV-4ax6jxmLiLZv35Nly0veJvSKSyOQisH2dMEp0cckyMHyiJ-QkDXPcGWwF7IPjSTm-AGDjNcWC4aA_DZqO88TljVbyZYdSVtxsNFholWIx6upSjVTBXQvA6Z1y8gLA57V4RzmpOICzdIjtTjGKbdgkgUUXX6pk5IsrwtX9x58mA0eAps343LOmntW1FdMud5JbHnP4GjF-wB2zY-rgyn37eKEJvY3SiUeaiQiogIAAo10FoMHyg23FQsShSfYipP1CwPaEkxAX7EoefzqSNmxMbu6UF4x5h5Si45EIbN-GXBCQiumEzuMBw_7WtT7BRuB9nW3vQWc_RxlT0NDQAh5a3xSWEp1skir9icvEdQnddW85NrXKZY-8OT-ZLwCR6KpPeiKmrA4GdiEgFUWuqHDSdgF7JMIhfS_kgZF1EsQvkYDLE1nL3u4aSyklqN37qLC6vSa1sOwoW4KK2fGHOS64wE6W7iZPctdxc1mlfTbvm5qhBlBVeWiD9roPtPQfitd9-T75Mi1x6s_WvtxfUpwFHl83dHk-r4DajZDqiS6Q../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:17.666",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872030639621",
      "item": {
          "name": "dominik-martin-b2-fBVrfx0o-unsplash.jpg",
          "isFolder": false,
          "fileSize": 2030390,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/dominik-martin-b2-fBVrfx0o-unsplash1634101219878.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=16b6b015d72c670c8ae6482e9fc470f5b68b16a7edc7da11f6e2051fcccdd3db",
          "expirationTime": 1634491215563,
          "thumbnailName": "dominik-martin-b2-fBVrfx0o-unsplash1634101219878.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!On846AgpPMJl4XU_Jfmo-fRR5CChwrgnHQVAQhgLgj5D77mdB6W26ioHzHIH19ea8W-GVq_vK2jkwpS-wE1G6B2S4SdzVKs6NReAgiB8W_G_IyP1amOwdXBJGSj3NwmXtW62FgyGvRuOrr9F9GF7NkPPRESApKWzsUDRYt_RAHzSfaxD7webQzBAq9NBkJIwpF2-vPRCsT7u7fTdXOE1rjZ2T_R-D7wjzEs0Jj6cmkgyvhxQHEge7RRA-mdRiOpyvs3c_-mEA56APIDh_HLh48m0w17SQ8QQg0thWvNTUnn7jjFa_OSmKLcyhlnfStqB9kGoD3EggykhOF5uBYXcLcyE4UhzkzDP36lR3CqVdMTWBNCRGjnjrZW39GcSzpja9YuakBTJiH8fHggf-HQcFdfsG4SC7HyuQd65AOxGjQOxPiChbxDOovbNv9O_M0FPrunq9uEXeo-AXd1JmThWiRYQWSH3hbRN9fViR-klz7lEvtkGeY9NnwhZBSMUFAulDcO2niC4hniKTRK4se2gkNjxj0Tb2wwXeFCbKZ-iDC81NuThsH3fTZ2brsOCKNPlE-IYD6fh0zbxe0eHZHbcABnPZGB5hBJKdVLFxPCMgW9Jr5LrMVjWS7HWQ5CX_L_TU8ZxB2S3tqHn2gLQ-y1r_mZ7MbTBGtxsVZZjzS5_QCDThJ5B9oBHN1ETcnjrDjW_tSxj0kdSM2fRpQ1QlpieUJuYGLltUReJoPfWPNWS1IDO4eCACqxnMNYUHc3tV9hDs1bwapVE6TSnh2osQ1GCIx02axpb0wFEGO7XnMmBFM39-sETTB47Z6tY3zBMAUwbUhsVN2TZ0u955cyrS1B0vGg5ELUT8FZNgYHDrLDjk9Kn9pjtr0nGv7u7sO3NvVMQGsN1Z6T85XXiLMwypPGh11EqwH9EsLPMR2vShvhCOBVVGmGP9uXvJaGKlvX-JqegiyBimtMLozaUTXelFIPFq66Gf1la1KjenHz2iNtJ0C0FUrCe6cN0CXZhCXwuaHnGBdc0ENuprf8MXc1jGhyk_6SewHKFcee92ANfreFFqDurEXRLv2BPu0e99nDY49y3lYQfL8zV32jt1r8bC6fNInfwzBrGzVYJC6i98_JivQqIooI98ZDnhisZ2bX2xbGd7vkInOb4m9DGTUu95ofIUnQgaEf_xtSyRcluf001nN_RVCqHE6nLcQRKcK0ciPaqpF19kZWmV_xtukKnptCIiBhsZW1aPA8x0AyL416NGyH72_o9lYmHVJru7L2BKM3zCzI-DEbHdS4bjCvDJlCMAVqiH8VgcbhezYZzoTPsV-kOV0ZG2gwe/download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:21.196",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872033342158",
      "item": {
          "name": "nature.webp",
          "isFolder": false,
          "fileSize": 30320,
          "fileType": "webp",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/nature1634101223509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=e47da246cf498f45f5c83f86eafea3aedd67b7c86dffb0e2200f0fc52bad1893",
          "expirationTime": 1634491215565,
          "thumbnailName": "nature1634101223509.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!U_muOHEbU4lbtH5HSfvFSOK2-wMzJHQ_KEe0FSu6TYLRYVzWaXgTlVJlTftyhDpiPC8sl52juiZ-eteg0pHS9YFI5rzAyqUktlYrRMr5lJPnYqkh6czMonIECXb91NpaEtxu4NYlvN6mi7YQitpgO93nUbNx9MugfVAR2OQA-yUMkWvcMkHtZiWjv0mZLh5bx7v-fEe6ELciekTrSYFLxar0srJ0_btyGC56FKi2th3APMgOqRHNOBR7QJth09990PjlyxWmGKYHrYTyf2N4FG0q95vKSX_WF5mNKhEFy9cLLzFv4Ve3mHaTrK36Lwdg43JmfCofegA0bt-WvmrHWpxYb_NWBTlKTFa0nWHoRZhMOTAdVXc_vJikdMzC5go0MKHKIyz7snoZ1O1x7T7j2auLbp-3k8cdhp1PtWknaeDrViDXSIboo6qhuP5E4sgslUc8qrZ4SF8dR_rtNBe2CCqcAnljoDi1gH_Gns19WZv1IsVqv60h83UuCjLoyAxkCZHihPzeqSSTLtAP0PrKZ967A0LC7TtzA62RCfxCxhU3O2UD5PYDrl7OomfN-jnIV8Ew6Fo_pHUH7AQ9utcMYdI0md83afRIXTUUuUI5XIh8SHUasETrf8YQp6xSUvsOc_T-JHu-AHssAqhSFOfIVaDEElwwptfuXDGBS7oaQjxzCHRvtjDJ-AHKS_3j4-qj2magD4ks9RF0hN3IuPi9_UJFntb4ce9xMUpsQCCvjLP03TZZnWW58k-NnIPHsYM9Nm3YcBiLHI3687ezrCSlBC2ilX07rXsIle3jErJlmm70QzrBHSu-8SCz4lUSyWE9xkQh7lCe6cPA8HCzlhx7D3YCIB4Agq24qIbR8rNjUT-w6HRL6UsodeGzIEtTMUgnVazCT7dyLJlBUUDp8D8jL86lYkuPIvJjEF9DGJG2H1eew9gwmKcca-0zqyjx39IiFNCnytw1BygJaqbCqytzIa1ydhqbf18La3Cf0Qc3D4ZPttbWf6E32Hrj1cYK7nZntY5_SKwP8Cg5mPERq8h2-X9zc9f3caaknr4zZ28mJlzSlpC2LJcR9gY3ndPZ1TXp4fZZyBB36CPM-aToojRaFADdPt6M5hQ6TH9kLOYPHOlfJiGCQAlwCsXgeEFOcCZ9AV74s2u6gpbBtkn-zQPNtkHof0lyKTXY8RXYnArsaIKt5su7YN3gljYGlQaWXIf66nuaBYvdezMWFD4mTaFoQCCLwfonnz79DjHGQaDjKUA7KDrrcSSSxZkFt8tXGNk5dUyIRN7RmXH1waBMWCPzBWesZ7yorHU./download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:25.127",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872031907147",
      "item": {
          "name": "paul-gaudriault-a-QH9MAAVNI-unsplash.jpg",
          "isFolder": false,
          "fileSize": 5605584,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/paul-gaudriault-a-QH9MAAVNI-unsplash1634101227381.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=54d72abc0b5efa1d951248912064f075f9aa876f2fe23e071b2d75fd2b8355d9",
          "expirationTime": 1634491215566,
          "thumbnailName": "paul-gaudriault-a-QH9MAAVNI-unsplash1634101227381.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!FjF_-3Fky_0Fkz9P1Mz0VfzwMcZit7KXpg8M8CoT7kOVjbnRV3kRwVefu6Ci0SK3ekzDsAOTjhLkzoqyulFxtkgjQNqQTZiiVWxcaKI3AE_R5aYrz2KXD9bBfeKpPVdQlUhX5X_ZbT_OyVKJ0-czDx7QyVQKBOq_4ChzQ9ZN64Yzd5zgKkE826q1mPdgi1wMoW-kjqKDTgxM8NrZ1iVkE9aOdWjcn2iHpduaZpJX3IoEJjHJijiSoD5dnXVrwq996JnZHCc6Q0GoNNZmnxAZ4lRDyTu5iH3cMD2TGMGi2YdZwPt6JIVia78CIyru7x1mGzFHOCPtNzuKFLMoDLCiP7H2TUzcrCqSZoQiMZBQYinKbzYxgrwCtWI8nUdJVm7ScPj3hdYtXyXExZF90M9rRGRnBYSyDiDtawpWVf63WE-c6PRhavLYM2gevGxxC2kGeYgKtdFCMxN1aGmA-rJfburIDEcwNLjlHG_kZT_iZDdIGS_YmUuIGYwuWjkiSjqylEyKnfyGzjrt96QPtKYYri1wSk-BbnLmNFgRICzTRPT0yPfOQCGSWVe2aebPYPiNF_8PsHHsQFwgkKQpevtD2hfKfn0e8_wWObnlQu3yTfVgrnLArmz-XTxa8mSIFqTtGHZD2VXwxkdyQ9CRWOJj_aH1oMHyhQdPi-3rFh0TQWc8VI4o0wqwB0PTwZn3OUmuTU32LFrrKN_fsv_RX1sB0ZVSArDWJvKwI0CAW3cbhfJdHiPVRWwnVK2NvUGGZ9vdkiXjGSEjOlS8OG9hf4dZQEMJIUqqViTufwYGVdif1ZVUmcboOjaIH33sKc3Fv38LR-H_tjKcYwv3bFRA6N0ceFTqb_vQ38i2RLBzarrkosWJ05wlbHyjgOu6Y8Vupeks9qugrqG1xpSzLlq5sUODegSdUyr8gw9XFd8bFuzXJ_c6rmiO16MLSRRlNYsK4pvKouxtfCYou2-KKZSy3iMUFquZWomfhSENNB03W0RyNGYXo02ks3LecwIh5uAfP5cc4EzbxmcEad1gSzba2Dufu8UW4CTd_JJKjZeJsGVOT-I60xhHHlqA85gKV_BJxEDqwL5lUgb7Y3cYtiorgnytYQ3TVpLwlDocr2hb8hTz2y-reDD-phXVskJ9AQI_EbsuepG1iPCI3WJcipTBfgwSv0OJmIjRjchIf2bQiouhjlwJA-Ja7BdJZ5IZN-BhCv4MgI-7LO7Qf8L4ZcDeF9wPfEZJ1pFzxOcwPBWE86K-APd9TpMAwfhu7YEsJ91wX7jDLmrqPhXvNoDR2QXkqNVJmDumdNjT0z3dLiL-CTeyOOW9yzaHUFwT6NF3Yt9WCfDKisSX3mr1-PgVupPxj3PB48VP/download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:28.407",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872031060292",
      "item": {
          "name": "paul-volkmer-updW-QUccFE-unsplash.jpg",
          "isFolder": false,
          "fileSize": 4228507,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/paul-volkmer-updW-QUccFE-unsplash1634101230780.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=514f1439f472b8efa98d623a7d2d28fea46a1343e9481757cb7d061572251bc1",
          "expirationTime": 1634491215566,
          "thumbnailName": "paul-volkmer-updW-QUccFE-unsplash1634101230780.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!NJQdY8hd28HgGgpr743q7bWjNL1d9K1kIf1UBFyWc8s7crwUhDtwyIjjrh3xwYZpWBO8GP0G05J1C_nEegEH4hNYn39dTC4BdpMrefA2uwMuNN-DAll2NPJ5jkujkJBU4reDLpNsfppTSpc_lPXMTvkGWsKpWQY_2KPYMRigc1s136r44ubUB5BuBNwd3Q6xHxDj52V7vs62xOjj39xLrrXgZ3V3pOkgFx2khaih5CgnqKqSDFq4EO8a1Q8g-jc2DjRxaj5kc3el1rM0iQA42w2bTzmOWgrWX6vtXL9d1ZsYRk72evkQFxBjijabiyby8LFtJsdPa3-8PCTCyxeIVKNhYDd52tQ9KuW6ozPDH2IF-nH8N0aZxJdeTtedFNYgcVjeF3XmaMZ8N6OrxITJ4vgAyXSGBuciXcZKCKbkt1OLJ2bvGESoJGZR4wqNrIzVADW-VWBTWRly__gBbpZVEs9oxUE82SuTGg5WA9kO-1vDOzvkMtRtsFi6l4SYfk97EnfO9D4AfsfJ_qrO9j_Z3rnCEkStVKxX0zijFavyx0LaHHO3I_RblVvCNBhfmfX2mianlLWjQp9q-txeZBmJ7arNR71QXcENTl1-O1JpR0FODHQQzS6TaGa2Rw0xxOxLSDbM1J1HFLJ0FXilhIOFvvRQY2Gqf1LqKkLR9AFGr5Sby0CUpgx_0IcFXeQN5zhHy4dsxhaGEeR01PGSRjWEzLyLW2TfXZcxI8as4FOcjOlZDrSFA_kV2ga9pbMg50acqjVPn1s9wm52zSe2V79W21nkJ8cX1-UMB1XWjALLDA7Ys0YbIzBdshp5YNCr8v0Pyd5thbl5XPC0NriIMN75S5lwDEqCurBqGc368uoVRgp4xHvm4Aw55CfR-bNpBOQBXBcxAgzE4ot6ktAZ3JJHNHERE0DIOCINEGWD7ZGg_ZkfKyNIlBx_I4eHRZEaw0ENwqXrFX9FEoYTo2tkwaZ4UQTWajRVS6LLPweEWHx1dI0NU4D9Z0EwC4y6Eb2TDFfxyqVz4KboHv0s9ZastDHrvGsCRiLqb9hayoU3wPOo1VO8J9qVtdZAMMkPPgWTgl1pjtAqzKhba9CJd-ST3A5nM-24YTO0oog_iypZa6mbIZ1_xCWHHiDUPJ3MBUhKHpgxB8ByYROh_OCbmHWZkHUAkwp4PZ3wYnp5ca7kd1e4t3AeGnz679zml8TEMkZyZNFmZzwALMJ2oK6Odkftny1TXgM9k3lOUhEoa1QDhhV4v8AeiovrVnlTGDj90b3bdkZyGMeCntqretg0m5jo-PUjUTxWMO04laKt0G51k67G76odeYsht_T3XTypSav7tKGehMGr22-1RWhMLygSvs8T/download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:32.019",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872030795170",
      "item": {
          "name": "radek-skrzypczak-WlB8TsI_th0-unsplash.jpg",
          "isFolder": false,
          "fileSize": 2584858,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/radek-skrzypczak-WlB8TsI_th0-unsplash1634101234523.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=36df1c2d8b7d5a7a3970aa805936e6b8dddcf793e6a705bd410ecc2a9f638412",
          "expirationTime": 1634491215567,
          "thumbnailName": "radek-skrzypczak-WlB8TsI_th0-unsplash1634101234523.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!qCHUZJrF8JftBEauEDl05hm3MU_fV8PzVRZDWRe7SPPUJIy_IGImE_k9Lr6Nyw6MYb1LasFufylSud7SpoB_azki059lHpZ1mcK81Qe_g_ffhOmhfD0Tz5WhzXIwt_cMcOA_foCgsZIvZGf4NqtgtPbrpH2tKTVFRcqNtBcuS0SalPI4Jqo3py6d2Oyc4W3NAMy4wB6OA7lqwSc3lpNEUNkePOKbTbp1LqdFihoGMEaBzM1c2sPxCc323QohrpvJ36IRngMVCqpNg4SaYJrC11I9vU_6tA9XHO1Yg3lynPyohPry2X9mqYfwcGV1jSW672YlXV8LzBzO0cisoAU5xZIINLjlWJ_DM8OJwqVRoYt_ZVcQAQlgBZiGzeDizJ2ysqCZ4Nks6nivauRdMavATMHGcN4oSmEVIaQfSMg-j1clsm1q2q99Q5nLWVzRe9LRbBk2wZvldPXePyGJVp7RekC-W7QTnAUqWZQ1tVzVaOHgwxr_7AT6Z6E1kZYS1o0eQ238iP8T2xtl6__yruyZndmbdg_ylhg_N3FNw7otERBuB6ozBR4oqxjUsR4gauhODMR-pp9yFivMBYUhOx0dgZ3O-mFOwTobyCgd3xk8ZkDSBxH38PV8lR1-2R85a0Ars5nNCd_fgAXHz09BDHdWkPITXjIz5hZaA98MpYKy9iUaUmF_yYeCqYEzQqlH_GAaOhwAIKY6wy7yQ6GMeS7W1dttRX5J1TY9yxXYPyhgCSWmoWv09pmTLBqGFPak6qKJ4TQKyhg1xsaXvsgsSilezYPrZEqwCSlaP2PIESf0vhBYsp8er17hVC3C9mnSMvUyqY0XS52jOjBdVUvsLZPl0snKQd8vTQzI0nm1SzaxGkX9BKpyFD-wFDB_6sS4TzUDcTvdWtlVRRocnGVGMhFSlIsnI9A6DDZx_Bv0yVj6obG0R4LoaRf0zcUWqz-ybw8Da5A-jZlBI8RMC5lQ056uY-9vqrF3S4PhFaexbBbQEHM_5F8nvyWl2b5ch6VYrfnTr4UNaWPF7aQcfUN_U4IvADFif33kpKz_FrhGIKNsyd0UCs9SsaD68vlbABd0CWuR-Drp6bEYzSEui8COJC-93Nu5O9535liSPGV8akEkEqllcNcTbeIVbFDGektvBUpvr7ObTv8LBR5HYMxHVJX73WMYLVRpAgehViepE69Xzvjqwwtnfi1zitwT3dR-rzeoMzNfs5Ax13676pZHhFBRgRnVuJj24irxN37KgdRvCEtitlioolCCQ-UFfR1s8PtLkxzxHE3GugxiIZF86BwGcde3e_WmMAEIP6dnXsHVqKsVWHTQ8HKA0jgVrKwV9YkqImXGkjAjrt01NxpSrtMDdfbECw../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:35.8",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872030414551",
      "item": {
          "name": "sample_640×426.tiff",
          "isFolder": false,
          "fileSize": 818184,
          "fileType": "tiff",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/sample_640%C3%974261634101237740.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=880f9e4d444e4ed96db1dea89f9fd65ca23f9235d99a682df08d06002b9b5b8a",
          "expirationTime": 1634491215568,
          "thumbnailName": "sample_640×4261634101237740.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!C-U1nxK0VD31g5sxf3VO-xUFIuAEnv2Lw_nI19gi0r20PmQKV6au2pXQRS25AmZJBNFpEjClbSs6o1oYoAHrexFauzl_wiF0dPJ48OJLk6ppscV6uciD9RXdlV3RK31Wwl4WRkKggaVwhw1h6DWVHaIFaVK0lODB_djC5bwOUrpfBGppoHgKXBsgvriOgcVy9EKayCplZaI8Wn4WHEMvtqndCnPmt9fCSethb_s3tcwPeakCsbpuOqGCGsU8yDbqMyuTgvoe00M41iiG-NXR1Siq18z611zJ2wNwWbbpJFCBW3EzLv18tfBnHNlRIgnpx1AKpN4v3r4jritkDsSE1fHIpJT6OMJYu8Rj4lc1xSHCZw_RQRBg2dq3xj8o4Pi_yLd1feM0wsGshR8rL3JBu7hex2qekKoPbOOReG2D6aj1qub8PYFB9JkH6cYcSno6G5Dx4gRB4qO0i_5bNTuma9E6WBZoYUIKi-Y5ZV1vgSESERgFvrUQi5vD6weOPmQsO5BCzFXkGOCt7XBkBnj_4l_ov_GizK1KzQzqSyzV0kaEAA900we-s-AKxlzsB6QCwF2NAba3SO0rzVD4gah0KpiORASrV_PG1ZoLtDlGVGRIh_47IeKMEZvj9IRXpLA2M_Kqqsw9275pBIxQPtV8FXAxPiZ75e3eGpfuUDDcNKcU9ebe5YJxwvH62grx7Q8t5oM6HZZnTnL0sTP-ulg1y2b7_-pzQAEUlo-3HG4xupjezVJqLYqcSLmLil9x_e23z7P7d4gTE4g6rTsGfr03hZenMOGC1ZeORp-1gHi2JVbw4aa657kbv2O3TdaRTgTqrKOmXFawWKS182vPQgHHqYHiAnUkmGj8Dx7sUP94_7LiEIrQZUU1SmaxM5L7pJCe7b3kJ3MbvbakN8NqDhhwo5fG1RbKDvasQgJySloVfIIiOk_kG55_opeV1Iv-4rYp4OOtHJoltZgiA8NlZPysXEgOxbeFr8mPJsSaB6ejh37L4qxLHjqZe1h5fVK4ZTC_dfYJCeRZMen8YK1D0Seqx8I_mAYQV87Qkgk3L0DzR6frPCaNrZ8cv4jgIqx_oZSAoX6P4jFh6XTRWazTBpLzS3FU_cf0-ItNZNMRKFlnRnVT1e4vKz_REhpZyJZRmuwfRR7C_ALtV5AybXdx5sOBzE18Of-gLruTc5p9nOODhy4YQWVxZ9f2dcvOhgW6XsadQy9kyDsveIab22nEEdXbqafjI7PGAIUztUtPl72mmt_9amsy6ZMgLtpw2NfuIqQg8xYAHpXIcqzE4krJQiyFlBFP33EgIoY./download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:38.975",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872031136101",
      "item": {
          "name": "shoe1.jpeg",
          "isFolder": false,
          "fileSize": 5082,
          "fileType": "jpeg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe11634101240903.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=fc5ed50b7f2b53b3bed5f20e9dee0c6024c3127fa202665e49b6d5a6e3af9c8a",
          "expirationTime": 1634491215569,
          "thumbnailName": "shoe11634101240903.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!Q9tdE7cGBhmFCCCkulsXdmUhSCuWvyS1CbSXNHtHafmo56UAp44wEgNG8zFab_Qam5ZjVE1WKFzPutJEnRjfuu3KO9yKWsV2IdS71yobyra03sAENwE5MV5Muxxvd6h-kzizNb_zFAwpisBWoninsloP09vpP-fnINVWM9GlvH7j74y0dLxQlyjffwepkgg1_QkCCQMm2UIBC0o9L_JC7oZJ38WPM3G_feK77mafC-dLDqnbsnK7UaceTpWckmKWTYD7sus7opWbqOvqBhdMS55rXyDJcOTTce25uanjckxuG80_DEVKPMj9jNgRkEbgwX20pdDqEcd-g9g4NvcUx0lXr-lot4EIkvYOt0otecoev4GDVXrz-G2J9zvDcZf8vTuGi45UisBLNF73pkxXTJzf5dP417qmQkXBrYd4_n9wpHLWdHm9hGIm5HS6ir7lpfSh6ksWGYqyHyvatSaWDz3bI6ZWvMf4LNwjHgoljQoqw4bUwRiJMOJiaiKxfCLURiIl-2iipVobNxhKKYcVBahdMUxVJqh2QpPUguW6Y2sg2ur8FZU6ydebmKpt0mnj-Qw1rRrPIx36Ej9BYWI1kwIUItZ1M9teUTiayjDOggpoQSR4mRdI2OQj9J3tCjr-L3qzHWAbrJnbYJALQRxHQekz1QYKykq3ywytlnsY9ffzZskH3CTqKU39g36ZxsWJqS5F6rlegI7YzmE5Ib-MHd9LIfEhsALTDWgz9l5UE1BnfSDRsuJaU3jHXoJdLM5wfu5mcbFLx8s2ktXfzkEXiRRTEezqVNYMpv_JQSD7GuJDS9w0J01WryaBwx3HEYF0tGM8pDF8X1f8A8mBvvmjPSYGbpY9La8Ym9StRtkfuM2tlKOmQzaAq01DQjdmYs6N1nTbiVzKCB2ZZ7Wt19PPlO3Am3h1SH1wG7UccxWpTOC7AXmfLX-XXSpM0xrk5AhjUiSeiRlonZuhe1WPYTcAnGqRZFi18MMDVLjhpYUgjI9bhuqDiZyhTgDmaGvB6PfNKCRX7cbi5UTrF6ZtYHO0UkRwb9YhaXPH3GTZUa9oc9qMmwEDlcHh8TmbG0PmrsewlCJcr64qzbhLf4OBSPVj_XyuREvtwGE4re4Kk8Ds-K5OysD6TVvSFmqu7IFvS4q9HZsteCxjK9SNUR8pY_V7s-iI1AjM0Br1gglo3hvOl2zRbVIE6-z2RStM8beQ3PnQKIMjvmuZsOYkk8RC9wpgL8jpXaar8MrY66UBuMB1FjKq-NzJ2AEQ7fJzFJ97qK2Gu8sF1QW2hg../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:42.059",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872034087913",
      "item": {
          "name": "shoe2.jpg",
          "isFolder": false,
          "fileSize": 135218,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe21634101243807.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=614a0f97cec0142960a90bb8963278052366e0c513a001c4fb45655c12db21a7",
          "expirationTime": 1634491215569,
          "thumbnailName": "shoe21634101243807.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!5--p70p_O_KbYn2Owp5liV46_xSZruoeFUbcmhiyx8P9qId4Hn5f84HKhNNGnNVqSuGXFOmtZeCML07uQHGvuePGCAmDB5LO6cVDWmmgEG6ZM6DNV9NLQzZnbHnmlhtdzsrfTkWlhd7b_hpRcYs_m7INVIOS27JDTZ8m3vSaRRcaaGdfTPC9LsBQpd_Dt02Evf8KDomOd-xM5-1lgwL8HNgAuY-tBu94I8x6gqMYyXMK7z-9n572HhUJH4wqeJzfYC3R1b3WFzX1GH7uKtykvo9taBbb1MyVUKJbLZqkYt4Y_WFAVdUzXNFifyrOBTM3t3nXmQ_4V6WsU-eQL8L0rRYHQA7v9bNHdjSkmj_K7g47fV2ST7Dg8gDOZZfMSA9eEBUn3q1ZoAQZuQS7MHfbQsdXc1clOC6qy81PNGeQn8bL7RsmXYtWu97YeIRM13yLGRbQxbP-9Z6kfXPb-Pw3iFdUsX6o186L7CJ8oVI9tnoW7dPWK6g79eEf1TsPUH9eRQNii6JacGQ92kZuCocTwCN-FfVgiLwMp_Abn1MtNGaE35jZPlsCHEvHfnlMMhWpvEVVHY3Ch7yFX3RV36LW9hfvktVqgykdlZloj7-EVN-1EPY-r-pFfye4Z1vNWSd0x6hPjE982w5yKb25UYgSdZzZYdDQWdZHBG3LJJK9YqilZ8AKB_jdKVzw8YRK3xb4hQU2lSo_hWmTOBGTl5ZyCzzpDgMRiKHmNiHbKQGkUDAp-rnQNXe5X0PDqSQtQPl4t-GMMb2cLiC1JdbzUBMru_-1sdR2talSHm03rplnnz8Q3i6jiy0Ya3N0IMej8HtWLezoXtFZ8DUQvu-GGMnCG31iTdHg0Umj0ZXo8PBAhftFdYtnqrZN3XLoZKW4wBSwoDOuJ-cbvflS_0RrnW9FJNz27ha7ZlP6_NQQAgLRrfBOeKO8Qaaz3Pz10XwoOM4SZG7gr2TwCEOhZCjEPhap3ae0JbN0Hv3ol3OUPT4gMLzns1VJq6MZZMeDdWkLGYNUc9l74wRPWMrdvQOuneCDIvMquDCu_wfKLNgb0RyoLP1E_6RvYm0U4U8br6EijkZbyL1W4LgXVH4SbvLl7pJaiu0G-AP7ccxXQ7p0P2ubmXNHqs_ehePa23FXuP4aCwqh59tvd99UTS3MOFn-9-nCD3NiMrgM3-GcL_lm4qgPIBx7j2gaUkI6sWlb4nkh2JA5XA2EJj065D-e8Y0ovAUuZK2wbrT3GHwkfTGnds5EXeAF10Zq7QdC6vagzYJrjrs3LJ6tuMfSbYw./download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:45.074",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872031028396",
      "item": {
          "name": "shoe3.jpg",
          "isFolder": false,
          "fileSize": 216757,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe31634101247119.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=c2dcd19899467a2e9a0a20852c8097eb4aa0cff1869b1095e717dff681f22267",
          "expirationTime": 1634491215570,
          "thumbnailName": "shoe31634101247119.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!DPXud5c9z6aTvKaIX1hftCgP6BfXL4w44NmKvy8Cb5P5WkzI5nRP09-xiMNTxj3Cx7HvxVI9pwtpDS5mn2RRIR0ZFi_KikcDczZxiIJXAJVU3sL9kVpY7gmkRaN3geNaMeCKhZHPldrw6E45nlSsgylvp_RqVuo-7MIsy1KEA0n2PYLPiD2789qF97NJXGgmK5Fh6BZnatTZ4V3O-RBy48CJdkZ-P5dbFzceqmwurKyqtTRIKya_T3oFsQqxkPfLQoVUjmf4pG9folANBmkNKg0nDIgBY8zIYoH8yAZ-F3hOVfuZjbH4uHoD4vADFXvHGG7rVyH6T_NKUaCpG4YeevUVhWRJ_aC-7cPlssolFgdAAGSupY0R1GD_dU120QtmWyLbAUlhVEifWZl3LUSU0YjWECSKL6-cHXzdgtS22XYrtOTwtjqfoz2qb6iQgI1lTd6eWpMfJYXasNMj1TbgcgWi_5OniCabZxP2rNjTQtgOoJuTEJU55NcbK6aePgGUYrstzrmjZYtJ6manUim013RcnnJ4zzoeOEN9oLAek4m7caHfnJ-2faHN-RwBXa8e323FFpH-yBshzZXFguqSXpHGEZc1CFO9X7Q8gDV9I6axrwf7wn5eCmZFr3FsxJ03rG7odfXerVbbWc5K0ZIeEP1g9UpwF2CfOWrN4_B3lk8D70WTljUIzonkaqw4kCpn_F-vyi_JKXJkk1PLis2QZcNrdy2MKZ2zPBc1CBU2-6a3sOZY7fD0F_q84o7vSOISQBc96hyRAe5ITuivYHVH7x4KL_qGK4_uGCKWhwdW8zSRonYo8U5QHy0JwMMJH9n_bU6ZwOyXTq4MWj4Vs5IiBXebBxK0pTqQUf_3opO9qabXfcORKFGgXKojcoqev7H0dV6ppSdd0ZbyvOQ8gIcJTjq5J_CnjNapEw2dJw8UejsqAiK5MjMvJCd6miLxGH5Poa9a9LYBaMWM1h7kOGVhGudl7qn75QTQtIht9MxS6G-kND_pnYQIxmo7CgMQhjXgfvoQlHAV7K2f1uwM-lQ6KBWnGTRM_k4kRMdMQRMOjGaOQdKpuQqig8IAGtKbsuZjn9Q3bawawK6iWUGdJDDUTeMGsAwTpCLZNzPT6Xwk8M2Rz9pFQN29mE4990StwLMmBsPETMrECdKEKYcxCtH8iGy4jBcCg8GJhcYiJB7o3gADvlUStoGAsth-iOVNwMHpBnidWkUFX9hHBaaBvELIgytD8rIm4-_lWS37C_lWY8hOAlDHqYKzn6IeILYIN6xQso8mxS5dCELVW-1nu4Ow2jcM9ZLuE3XlL-Cw0SviIcwj4g../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:48.416",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872019309016",
      "item": {
          "name": "shoe4.jpeg",
          "isFolder": false,
          "fileSize": 23715,
          "fileType": "jpeg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe41634101250306.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=1443e1cf9ae2ff44d10221a49745c303d6bacbe85ebabb418d496a7304039bae",
          "expirationTime": 1634491215570,
          "thumbnailName": "shoe41634101250306.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!14t5yyKm_rHckh3Pqfo0STLFkqKJPdjjWs6Gd4L4EWKejt4fPpLurp4jvugoGdp1CXsxUjcm_MtUU6_YW4YJPs08Ns8PRMfl6i4dXFT99xkBB-7Hdn2FMscv5o3fuQBP5MHhCHVHVpBjhghYbzg6zs0R1Q373gKivoEL2RgcS_ZDNslmQZbZiHjaU_hk1lUx4NnJECcrHT_E26v4vhUzcJwjR4yhQyi1zTPorqd8L4zXMm08jcn4UBxETlGyps5SyUX75ME1KSquJKUt4byGeZkBicZq_QxiUlnfj6-ZvEzGYkAZDirXexqhCtehYdpRkTG-K7tBt1RmblbPo85lHvmdum_0lnfjOT2kv_147erWHMK7XpqMimg1BDLKXG8d3SxPsJ2TbA792nYAsC0kWSjvNhkuIUYGyxLPRosvkCCu1VLTvKVSHqN9ALh9uNd8oBfSl7zeNYsma8UBsCyDDUPVECVVcYdl4KPUCXP8LHoyOL7rLUrL1IfxJkVaK1kXgEIMoIazLxddPZp0_rM-cBNDGeS5uaZe9lWfyp9uEmybOxJEP_bmkGHK1JKg-nz3r15Ub6sbq270Dv5A-Ln8Fl8MPiUv08ULD07L-Nx0Q8xabR2bwLRBAHO-nE5JAOF1xYjLSW1sRFf14EjnJbMGU8HIElh4PyOjnQgoSqfWiHKQfAqIe7f8j_WDe45KAGJRdBBUos2HBfh2CuwNV91kgLZgMDVprXhE1ltqAVDiNnAuOaeBPH5LOapfLDH8T7XX9039tUCYkl9NjnQDKkesrOC0t7rFSQ1zOVLo43iYVYHqoZg2qhyjxAdmKO7qQTqWPwjq6IDb7hZTWw-SeJA_dKAQOfBNgeMXROqQqk4N3TopHZCGOl7bMIce74Z7awOf0zvJ0qkjeHFwVLIRrpykyu8lRisfTbWdwQy9KVHxdkfb36kZ_QKMHnjD9FSyu0JVqrOJ0SqSjTOYA8unwU0eeTMEKik6FUDNqUC1b2e8JvNIFH-fnVTccBGAdt7iv_HxVy4mlWywxMGqKHVTdMCPdbXQ1UD4e2UddP6qNLTnJZxNopY2eFT6212FYdl3DQpNKo1dCtDsPP1gNiBh--RkVas4gEJdWanLDOWrdZ08vtDKiYdEx2NH9yNJShwxzRf1dljCZasHkj1NJcrqUJQOMP8EG4KexZMAQEhVizotHWwTQKys8FsGkmU_YtPN86BnEhQy3eP3smOrHwDeXzzaU2gv-4_MoT2diJ1Hk08oN9BComtDfmXjO4duhY3GWAWabYtC-b1Ffk0./download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:52.117",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872034074237",
      "item": {
          "name": "shoe5.jpg",
          "isFolder": false,
          "fileSize": 8057,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe51634101254261.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=0907b557b51229159e7661dc2e191543291f85e8458692c1b1793792338adafc",
          "expirationTime": 1634491215571,
          "thumbnailName": "shoe51634101254261.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!fl9PDIckDfdHsXxAi7EX2A_kLppmqehl72TeVPwiRik-MZ0-hXOnABMoCHN5YAJHxNYPNUJkMzexJOjpX6VqTZV62eFv1FVMiIY1Xye5Nh75OhuQaayXA-LhxAy79J7CvDEfXH4NzSWM5iauNLNP0REjWN0ebnroxYaugY75bTgyDEsXdD7NlTNj_ubvzZLI26ur5fFWLLcNkcgUA_ZaBB3E-HwX6XrlXLWym1C99J_ohxyWtcSuz30AgPIXedTltP8B10dpmgivfgu1oZnrx-TuzuI10W6XNWKWMh1cV3g8kYFuliGAufHQ3U_1Cbwz7q8MELzocrmM73lCPkHWFfoDZMXEQy2bXxavyrrzhDPubQyPNZIFYCHvVLx7q6c0n4eFQRcnu8Nf7Lp2lo_7CxCumQtZ7_ffiZFH83iqYMojfCFd0Fh_nEWwzK7OYf6H7yZaEw3pj2rwPBgPwFtBDGc8rXllixIoZeNIfuU3Wx2BopN4YLawLXKJ0UsDS4jYr1AAQehGJNpAQua9T93Eb4i-D6Z1zpFGKvGRHYcxnVnuXJs2aL8v6l6xByO4kgMQY-xoqMt7MaGdqYeK-KLhMO_DMV_I8REqFKH9d0klCN0DV6dXfRIfVnpvRoqaVM9MIk9z2kzwpkcB6rpxgnxZu9s-LsoSYgv77pjg_BWRI-RvfsbdT4FVK1ApzDpezIn0YXVpmCis8TH-9OQnwbv0h419vb1y99vzsQ8G8Z9k6WsZHd1j9tinFr0fFQ2lkYFNGQbiAIt_WCEZ1Vl_kmC-o0zz7YBPBDsABhM9XdReGiv1bBkAhjFqgFTxXkpUqdz89FGYZso_BgIfyIcJbJ2pvijUZhTMlKi04wfzH6kBmB35oCF97bxAcr7os47QuTOZnTAotAGd2zbWMLV3bL3vzqEMwE2-a7aqf_THgKCGBEYbcI1l4tUgtcpjeQCqRlF_nbClNgk8OQzNnb1Q46_cTxEZEsjAnX_prM0u4q3c9jcz1FvSlPnXOwC-W8MDk4KB65nHUfofGM2HGMVm_VhNhuAYxYHYDUf6LQUyV1HVGApCbgTAYyd13ej9c6kFqSfWB2Fd2TU-g5ZOmsU5Pz0l7N9gCzQk5gCJbtNLGHhg4W7UTQMxlhdGSsHl0V6kb-qFEvclw3-bkF_8M00UGVFrZ9sLCb1BHfHdjAKdYm99PId6BXC3QyPUPdOHZ_bVfCSOB2VOjmXLQNbo1P5A6oTMDomqfhPaCGMj4097lW8RnVcLH2hL5MYRMvWlwqYv_cs0nY-Hgkn7AcYjfibwKh42aeusdM-_SYMm7tJFscEIMHY./download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:55.503",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872034166820",
      "item": {
          "name": "shoe6.jpg",
          "isFolder": false,
          "fileSize": 4548,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe61634101257277.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=dd3e9b220d6d5ab68dba28bc05d365716279d6ef2a679ea5b3b223bbf6c97c52",
          "expirationTime": 1634491215573,
          "thumbnailName": "shoe61634101257277.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!2P6yk_PPCsHCc40RlE-yY-3bSyOFcls6D63_FMgtGnKXkMn_gFxLYmlEYN4L8zW2-QiGGEzh3Ngk7C26WO5XfJTtsGtq5f-4IVPd_S9NqbnKKyFTmoUceu4KniEvtfw0OUhAYusdoyGDCsrRQowtitj4HpetP67wKQp8NNT9ptdAcuZqkycWmqSga-oysgx6UAwicas_1sxppZZeVni417bVzV4zejlUATYi0IC8ipSBRcR0A6L_X8-rgCQGYYz2PFmF90hTf4aQlqYKDRdziaa2pt87NuCH5WNyYycl2Uz867mEAN4ffwLP-mzmOhQKbGWgaZ09c1Y51tGM0gH5KlldsBrYvHG9pYoDgGIiClv1Vu79eSeiTh4OvPhUsclYwzPDzZJQeKNDPGlFRebCCdCt92kVBYsb4CmMsUsOlCAinKAPrZjAsasgnDy7Cs-A0jCGSPsOEaQqIRwxGUXPvCiV3GBrN1CBORfUsi3NMSlv32K_Sx1OLvMjFgUpIiKBn4AIL_bK1ng7_SS_EqLdUF0JgxxMjfo3ALu8lvLYUwgDas-Osv9qDE2b1rW4woLjsA_-VhTWCPOvJaAqe6GcMrypvGtfRuD7TnsmS2lXvPlqUpfEjB2m9tjgxr_-rCDAeDDKjsKDWTFR69OrQYlpHOEoJu9HW5Pi71rYf1FbfsO4ICtNZbR5UGAbi_fX2154Hu-dKqMcqgeMxH7sRLv1iRk-7XHe0Aowt84n99hR0uIu_YCw3rhQF3BoIaZFUlNzuW9otYUQMDdYg3RV34iDRXLmIoj98ioeovIa2d0saP6dQ6Cs45-dTCQm8RTVT5perFcxBOh_bH_FBuwkiqj0XVDfS-ZcNx0yo5BfB5_8qhoSvA-6ESZuCad6LC_wxOHB5B7rx_4Lab1LQURWp_XlVUAxwLFqnwnfo6K7FE8k_xc6hXMnRbfLMB480rvc95Wbvt1cQbSmfhh5Lrl-MBRGSHThcrdpMY8oL_36wNURElFjRwXcrMMi0CUiDECOypZ-SEY_lPGZpX-1Hnm38WLQxscLMagZwiOS8Jz1osIxA4UxTYD04jLHhmoiQsaeohKt0f21aGcLbvr8oNfNarfYWJmAej-S2crv-NJnWsHquyzBytUb6tGVxx3eSpNZs1Ud3287FCiCGZGVsgzRkn_w-KMnaQpuaQj55_JDhwbSE3P2tTY6jAoga4AdPIR7uipiuuvBKCfbx1LiajjsQ7isIm9qoHDx-_Am6FUamWBbI9bMRE5pGAvuMJxjy4yO4Fz_4wUe32kN/download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:00:58.415",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872031606131",
      "item": {
          "name": "shoe7.png",
          "isFolder": false,
          "fileSize": 192974,
          "fileType": "png",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe71634101260444.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=a4b8bfcdef2ab654b0f1a2353d0439c4daf4418a20d1ec6c5dd84d0bc76712b0",
          "expirationTime": 1634491215573,
          "thumbnailName": "shoe71634101260444.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!HWrFHGvIR6i4-VD1s4Vw-rxJWozB1FERlkMsoeAtIhmCIIQZS47GYwau-Te7ngKyuyZpS5pZ_XbSzmzHkJhhVqGDKiIkU44lOGL7sRFUMqS4Z1fL1uhluC1341Z5qZK0PU5ktKlmjDYLIDgnYY3Ko424NIFJXQwSDLf4QmJtlspQN8qXJ8yaLTwKn2ycdii8wS0d7X9spSH2phu9MEHIoI_fVK5uUjJcr6uPomPcXz2_2TfnajKJHpGre_YTtXYZNmYYxglHHBnJ_GQVTz8n3nMVWLP0lTrtjaW5QZpkRjSsVKnt4QFxVnsiT572z7qaLA7Hgg6KdD9Lg2Eh-5cKRT3FI3HSNA2s6N1HbNMbgZ5573BHXbMWt3aDJ9BJrj3fvxID-wKDHj3PeiqQV5fdiyCRqHE1cWAFpwtLif9sAZnwN_Dal1PcPqs3sygUgI-jzqRsTWlHbPdzHq2dNIlIzg3lYcoDj1Ll3E_37gHyva_BysWT6v7-cR9_F-G6Flwzr8ijlc1L76WvQ3wsaVvzZ15tSmcTDxK8q-YAZPHBFoSA7CJC1Mlwf4VXTojCY2NcBw1TC8y52Pt8B-I3Jz3rL2iYepcqwGyL0klk-93XZMjQiHr6gda9XfrzdD36zvozTfnR2378oxgkOlVCQXet39yDQ8gKi-30_ptN-EViF7zvkksFegJHKLum49dZ6TjtiBX4D4N3IuSaTbujJWJWqrG9bglx-LHZFx2x259jUX7pLoMw_akPpz5annspaPM7eWZYSYUWp8LhXlQaVg8Mz_PGwAbbXb1wO6PrBQ1Eo77RsprREkGVp842-bTnF9P6fW31eQWIxi13cMBVn3DlLAW4jYaIYpcwN2IrrnZzRuGxa26s1Vlottuaj3C45hDHKLind8jxVKQvRkmEs9q1CKMW5PjHZbdS95vXsr-yKTV3H-BCYsbADsR6LrsCyzNUgImDsIQL0RSIEd8ePa0HBpC9_1X69dxhMF1_3Hq53xxB_nBT6-Gl-nAIuqeQicIk3MfuxCwYbelLyM43fsILuy_po2tZnKt63Y89HvzLusGOs199RUWp7a6DXivtZyoPiI1JgwslU5nNEDv1HrikNaFOILgsHGaYZGm_wblh64fKQvlBxLISS_R0_fo1fljI9tPTVIWZ3tmtxCqFdeZYrUjvUhzRfTgUhcaaN4_AbYTmzi4OHA_Bo4acx_ecDQL--AU_6zwCn5WDzzl-B9T4BWkAQZ6IzQlJKJDXpvVxXc-eBzR66Zt4DsrhSpp6E18nKS-7fpNa0w../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:01:01.61",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872030573554",
      "item": {
          "name": "usama-akram-kP6knT7tjn4-unsplash.jpg",
          "isFolder": false,
          "fileSize": 224863,
          "fileType": "jpg",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/usama-akram-kP6knT7tjn4-unsplash1634101263689.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7e607bca50d8a1508d9d5cd8858ff0f23caf6dff9d3e61b6f639cb38bbe6d3f7",
          "expirationTime": 1634491215574,
          "thumbnailName": "usama-akram-kP6knT7tjn4-unsplash1634101263689.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!zukbANjY8fn08d9QXLHMCP2yzLV-jlkFVsdfp7QH8FO1NDuFAwF5yVOfAQa3YyY6jPCtOCzhWHUKcn15GOnXq7JC5VxjUuJXDzqNJD0sKSKu7TZXZJZI5It-rWoK7c_r4P_fh1ncsRq81Y9QYUn3dXQRPlyB2kL661kYD6_CuXHHlseISXyJ-X7x-pUTTc8odL6qqzOqTT6KcVPnS-8suig5F52ExvAHgvyNJAwmmiW838W6EzghGsnWBf8kLQC7UFaFENjzr_1CtWRWznZyEU8l0O-d0JGdc-90umN9pUsYLtk5yO-AelUgAgjAW97bzv9oXuDObEVJ-iQcJ9Zck_U13fwlWJrJ65K2kRX5UBxFwUorZd4LX0ta9pKWwQhFEfw2CrCIlvwXNTODeNb0EOXizahfciQmYtr1h-cD8i-m8nMjVlmAXvq-kySuYqApSoiItNk6l8dLbie_cditIqgmPMX_1f53rxkvKkWmdJzAj78Hg-TcHpZL3d18_5oEtDYmB0LEl0XSEgnBhq-WyJlFHWr_DVolQ3UkBWaoaeEO4gSJDCGVUYguuxODkNO7Hyoa9FB-G9Av-lvwfXw_3sERKVnmy6oCNuhvAuhWvcKjGuONvEdsjia4j0jClOsnO4qUjIIZJELMq0fobDzt5f4NMIzAwhG3D9gsEAoxiTK5lf5cPc1PNey6P30jRKPwjDm6aEbNUiORZdqI9tuULtoXghgSSmq2NII0etncWKcN0lSS9aAt7Cos5XHOMHonRzSQhGnrlL3hZAkCpHfvs5tAIFUYlxKr2QZNyZ0vHl5lbwuNuorRTmCnARhDYaE5q2bRNSpvRSrsrlYvQwhi2lGAkER7s3neOvlmpJbzwA82Xd7YlI1j_fZXMnLOio3PPlV62huik8s_NCLJhiCCU4pAmrYDerbT984LgZm0HXIYeFNSqgP4tG_QSA0j8bYi66UCi_ild9Xb9kWQ2UehYZP2xi6vTygMSMnBDRDvnviIa7-LnDpMMf-K9-RnrxxWZo6HqKd8jX8XXd5Y0x3O9vv26micdF9eM5dKC3RgjtjrstEtxE50BKiDOhaoFUivjLiFKUNFaBNLDXcVHGoqu7OHoiQOjJZKfOmt0VO9w6jIOyBuYUj_BZy4Vds1hPw19taqRmrt6P9Viri34ZX2tPJKwn0fBoaSnXSJkXwjFthEB9hARxJmzrpw7IaVIxN2mBfPFCpVaRcQsL2VnMb73rKrSMKsuz6ohH-PJDwpWuanA_1KW6g_7h_Aux-V8_gzlCARGUTQVGqchagyZI5CDzJZ03td-fCNgloPBovbVpYhTiTpWp5lVx42Z9WqScoLcRQ6bwkXVkC1MadV4Q../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:01:04.802",
          "itemCount": 0
      },
      "parentId": "147844675200",
      "paneIndex": 2
  },
  {
      "id": "872030164667",
      "item": {
          "name": "test1.txt",
          "isFolder": false,
          "fileSize": 19,
          "fileType": "txt",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/test11634101946898.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162018Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=865a46c9359dfbf7e8692f07f9ec1b95f2ce21f90cef559bda2ca58017013a32",
          "expirationTime": 1634491218318,
          "thumbnailName": "test11634101946898.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!xprzkLCVNeyvK6c4WWO7rEUTR1HuJfZ744aJOFmD4k4ojB5KTKPe0Cg053Fe6JUFsqDPB3TGVmw34QUPca521msn-0EqDaA2hVR5-GJsY68EIgalVDJrOgn6rwAcHm4HXqa10O-milRQws17F9m5H3YUk4Gfa5tHI-PmxiVWFJL0kzK3Xg1YNj8igiQfEISkxM4MZ8mNfKmP0RDRnR77Z3kQoaWxdL2aK9pCk2pnXwp3ODZeCbgXJ2WkXajcRpIH0Ilhwr_OW5DwfRzGNTlnHifNyyCKeSpp2UbvaaujnwBvmga0BElM1JfDbAlPZaLDLMAY9j9O3JixvaCvzjcaow8CSB3WqPjQbE8n9AGYK14hq8az0VmBZN_t3wjZuZwpBxLAqWRFFIi6EDoQBkeJWjTMPRXHD42aGEzli1sPDGrRNZu_Gtsybb767Qs1taLNYmHSZ8NVZwTn4EpbC5iRTxOI05RHSvTDKrtPjMbQ77N_-R-xP70IOMVJB11hCSyQE_XkMJMyJfNVSZacccLziE1POPOzeswuzaXTZmr1gsdjahoXW32Vw7VSMzitHjPCT7PplFCmHbt5zxpjwbKVLZcXCOAaycTwj3pgJkY4e5nTEhRPbn7PMp8Cw2J6V6WZTIOVEGHdpdKeNmjNRlcjGKKBFo9zbZtImqIQOcBDR-CaS8QiNJsj6IP2mAXxsLyVsUmvf1WEHOr_nDFGv4IUqHKa4uazetjXeQ2PwiJVQLf9_x80FrAw59FCGKgqqQHFHtZnt31B7IRxhWJo8HMDscSzkDrIgjzuKai0lwj9BcgNXz98Bee8HxaHXPdlm3Jtyhwue5dGsE_3Xqe3Dag9UtW0mH07Vl3o8cNeNwdgo6VTx8Rc3ePWcw5lYR7Ji7R4_2FL8AR95DLMJyBAWSlvToqDFIILCDwN9pDW0JanoWayhFziGfqSAl0eVQ6KsUSkJs4klMB4OBNYOqAs3Na6nycwqQaM7P2eOYTyXk6mAi_S6r_Ahhp2xv-r4KQFXVqtJZIPZmXfZ3agZpawvB9ND7mkM-l5d984t8Tta_fnEeBbGNK6nUtEd4N8e5tWbm99WIIZhGsD0oMCwHZChXvVOWI7BD32E-rTYIe2VjssPemVzbTHpyX4x77AGD4btwzjUtDYgYbP3Yin6OMWu97CHLF7D_jDshDFzyDcqeRhSlCFQQchk5vYI1pNx0wtVfdWA-1UALPdt725nyYxGT3DL6XICLYeHcTywVoQOt2z0dmOzyIXEsq5i0Ki4jAH2ykC8IAM-BgWC-cMFN1rxGBctuuIQZtau6cOLN6zMjwT/download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:12:30.925",
          "itemCount": 0
      },
      "parentId": "147843683727",
      "paneIndex": 2
  },
  {
      "id": "872027692134",
      "item": {
          "name": "pane view.txt",
          "isFolder": false,
          "fileSize": 21,
          "fileType": "txt",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/pane%20view1634100392306.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162018Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=a69bcd832e35781bb19e5dc1683efb4f1ef892b04f1337fde88d12bc220c3c9e",
          "expirationTime": 1634491218319,
          "thumbnailName": "pane view1634100392306.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!pvFzIVwgT21Pd1O3Ba0u_IC-AqThiH4znz0R0pTpSESp2xFPCrYsHNe8jqL-_lFNamSsUj1kdM3xx_wNi0g5myyIKOZKuJ1bhMgNa8neFRSGL9d9SmFMuyjacz8oD96i2KyraBIlwFNLlWSDNcWmVinmVYcvH-0ff4TwvHuetdBC-Fkya0YxRyJQ6Ai9SBFiwcKX3DJfJMMCnmXlEj3X7WajI9kLXX7-P6bePu4Ov2aN-oTON_XQXpfAx4qXxfnBumAl7y9JXeXAM2bWythiKh0SM_8OP7FPL6V3o5fwHdzC40wPhq5aJKThkTUKb27UNbm5ik2h9_mlxsjiY7ZatSMg902fYb5g4rWWS6j1Y0X3tW1dfCimh8vLGTGZz_-uMgaCkbGxNwhYfYEWCBa_9PqmGhRKsaUoZm61meqMheeU4IWJt7UZXT2II_2WAMNXuqAgUltKepH2yyaxO1BbeCCJ2_ZLeo2LmA6v_ysQHXZvoMlUjd3G4gkrsX3FYxutyKF5bIiJMRbKppxbT9E3imY9k9-kky8gwxEDak2c_0JAGycp-itmBAMX_OJ2N_XGnwcW1tIDUQxZJU_PV3G4aGBnXDQayljLHSv6E1K8Xfc0ze95nlOmNCL9uRcCWAIliV4mtg6P0yVrZZu2jJxDCrqUeJ6aGgNDTkDknIpRl2dzk8v-vfUVZQkTfIW_L_BWQe1D4h7l1oUJSBrlbcYGE6zoQ8lxAbJ-ydY8wvXGsRPudYz56BfVF3CDyMqvQnkttrYqQDmw2pNjtGrqfluZLCgpOYZ_TUuOJ0W1Dy2kMJiG1M36yh4DrR0X5aTPwc5oNqIAfA6q1TingKAEnD_c3mKTHraWsxoSNyhawpWtgzpDpYrXTTOYibJF8aZuHJZ3lbubLoCsf-1Q91n2K6D6-3Dv_IWT6DhIpI_rvaeCWXPrJV5ASf_WBtayoc81zsQqKPASxmM7PYUDhUbqsXAHXS9NwoSq71xh9Sg7TPfsnxkOlL2wld0mdiEGnGH6DLrhfauh6qG6ypxuIzCsyZ3GI92tAABwG0yvGiXUkw45pNh1O3ln6oCobTuB0-MVkwtT-cPAyD3n7fDhSeY2s1ULLooT4RmoKEEEqJOmSKBs4QcLu3vlD_cg6yqZs5rYPR5qHejQSjMEt4yi3SVTrLSuVMk9mB1-ju_mwbSCHe8ySHlKmlOsW1oj2TmEoqGT5s_nLrqkSEJwHXfJXMFSzAPo4tfLfWAkcH_d9ekSh7_Wws66HXrSKKiibWHaZ4FVIzURs6xqAvq867bhug../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:46:34.178",
          "itemCount": 0
      },
      "parentId": "147843683727",
      "paneIndex": 2
  },
  {
      "id": "872016973340",
      "item": {
          "name": "one873.txt",
          "isFolder": false,
          "fileSize": 19,
          "fileType": "txt",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/one8731634100397241.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162018Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=af1e5d0e4faf466644cdf9dcc54e60fdcda0d7ec3d051bfa1f3218fc9fba3d39",
          "expirationTime": 1634491218319,
          "thumbnailName": "one8731634100397241.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!IN0OfiKG1onSSu8lGTAUSk7Pt4AnKnya4tyPyqiYgSDsSpPoI9U9_KlreLXa7l9nFQXpGxLG_C6xUCPwAcD9jPU8NxKc2ZMyZQbZvMkAPX9UYzvXaJA2rHpgAMpS86uGZK27pp7tebNC_U4usSVYNrPQBwUTUU4-KQM9YWQMjHiiJS4JFfavbTzS5AnDge6blgRm1wLoSJbIz3uwNyt8yVzb2Sr4jUZitXEJS65h2kOuayIiULPkNEWWNfoYSLFCPi1eC6-gOA3A1Ve8V9k6n24h8eNpaXkyTNWzt1tcDdqWdM6GyXvC8RrIfX9zoIdAlqGup8Z92zmF321U9MTRc6bEk1T7kzXsizMbxPaaNRxzhWLtFJSPhcc_ccthYt3vaZqzeTwzgG65R8ptE6TVLmGUQcScqWM4rFm3Ahow0MD3ZuoP1bkvBHkonMR0t6rbLe8lyDWkjg5kxBZimP2eWOtnZX6PfYuUv8lq4xJYoChX2t0Jp-na-cK1UhpoCbvUkHAMw2Zi8Km2R4V-kTsuR68zV8jSApday41CLLQdACU1WkP26LuWsAB4Sh0i1IxdHYV9fpNRIeSC6ZPerp0qvF3nyDRA83KejTJrutw_uiCg4hVSVIlr1SOhRty80lnClZrVSr4lU9_XQWxS9IZLHyA3JC0jEEzsP817jK6ehYcXzvm0RsXoo_eACfcekfqFYMlCrCn4Q8kfuYVaGy37XUgcBhOoAJ0BiMnNmxRG4IDMpf89zY_VeG6T7zNEpjhpSlUxKVJ-iPcWQ7lRLRdEKcskKcBl5bxPwLD8oAyev27UY1DXfqLDoY1bdwQqmR33KEQ6DAyyayyXEYY8FtzjC_5N33m4JRWZ9DYEC_Rz7tJTpNVdvvSRzzfihhmssDbxyNIzOGyELthaaZ3dCKVhdg3YR9pHEr6RWvQiOz76u3tRTeD7iYBYyA4HR8lT9Vq7qbipwmOePmPhSWnY2I9O3bCufz9NUvwlnRv0X3Dzh3qeV5n5SFNcfJynK8g9AFu9CbJw47lgZ_VlieYrc_29mjvzZD47jP0xdg4t86rONaEWHGfbRhZtXT2f7h4w3ocl0IgaFRJ4ayhwcQyaLA_aSa6x36if1yhPOB6s01SyrsIio-LdnEt_KQKMN9yTGfOwHmg1pyHnMZroMe4APYY2XVUGsiIiDlPbimL3_z9nsJugTgbPFoDU4AEtienQXLDI4VkFcEOQw77-LH4Eyt1WbJcWVfvqFYcIeD4GsTHkQ0U0DqjyLPqvk6IlGuDRz0zMlVQKNqo./download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:46:38.171",
          "itemCount": 0
      },
      "parentId": "147843683727",
      "paneIndex": 2
  },
  {
      "id": "872028300493",
      "item": {
          "name": "shoe7.png",
          "isFolder": false,
          "fileSize": 192974,
          "fileType": "png",
          "thumbnailLink": "https://patientfilethumbnail.s3.ap-southeast-2.amazonaws.com/shoe71634100685885.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211017T162018Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIA4L27K4CWP2A2Y3FF%2F20211017%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=1e6a1c9617d1b4d763ed7ed0f65a3e361791a2a9585c9e30027c2f144f380ea6",
          "expirationTime": 1634491218321,
          "thumbnailName": "shoe71634100685885.png",
          "downloadUrl": "https://dl.boxcloud.com/d/1/b1!Kxlh88wOswL1ndqWGF9Sh5ktoRzBV2-ZY7bC5r9roNjtWJozuyhBRQU7H5Iy_gyd0iFA2MPFPSpXbjROTZ5pMVGKq6cT9XDAoCvgHw-meMy-rjr8dic6CO4_2pnTAqSwKGupHb1oEeFqaTLiE3sQtiass6613sMtcq8ic8KC_PBtcQP3BDCa20Lu04hTfESRWzfyDlA2y-K-od0QeFkTSgNgMNTMaP1kPljfeLJS7joPq--zKE1h6amH0RNbIVsElf9sU4MwYNikyA6f2L0UAKwhjHUmJsE2ebyMSlHintm4lt5NaRM9IWyYOPIq0yKFj_d35i6tsZFKwjyUR9v254NmocgqS1CIwyXtCzSz9DqrSo55K6XpU-wDnzyY_B8Hs2qgUzWinjsYq9_gDd6Wl0asqyPlWCt37stxHrhHBKC3ENqcC0R1bnGPDLiE8zuEHx8XtNFI2XEDDJvKmsifbxZbAXqYIJPfUGacu5Y3BY934DPr8uGnYBwcm4gJmRBPdR5sk8vw8AT6NoM7xUK9oVdjlnp0_lROl8ztI_4z9NOCq2zcCj0lpHEGaJ852HKevgMV4RLLTbVu8s5vQFYI0tHsFLLlHodmuLw_7eXlV_yGcmzkzH4xPvEPTk33vMUQWFq9HZ5m3m6gmlLmWfjr7RRE6GjJSkTOHnNDUTkZi8NjSyXvJyivVarOWiD8TPsZ7xd3G0xuHfT9j4-uSqifRChtuOlYl1rWfAHvWz5ht54QTqeN8ULoeRcXOqStxkTQPqXyDqgsAvX_RUib5FHxDvflWe-8GujaMFGE4-qPgbMV7rNHrpF2OWhras8tsXbRPGUfifwZv2QTBZFx1Q6lbH073f9Cm4K96tZ9WSLzErZG5D9iGhmbG4xsF07H4S5nWS1BSCYW3YGzx3TZbBGmJTuYRso2mK8gROSCEF9ofZCJ01bLxqAzq0ODnurm3_qLSJsNTilNoqQyb5Nu3Qjw7YW-UkzIUHtuY8tX3B1u8BraRTIc2lROOnneyGtYmOqa3MD0F88k_3bdD9nngPCX0iwdzizdwY5IF4PX23kED_toToz-hLEQB0WtsY1NWKRIMuuo1xVxAZkJH665fUPLI1EuFMV2ZhblUFKkJuKlLK_jMmaXnEfOJmdQ5sKcxKsgxCU8JgF5t2ViofkQJpqHasEoXq5Fylttm-8P6UfKJ-X5gJYdJ3UKe3H1FJP27QpeM_ewqG2XV_NidDO8XWtOygPcJudwN0cTUAjnwBGTMt5XwRk7fdGarQXQEOflTiQV6cWfPlyckA../download",
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:51:28.055",
          "itemCount": 0
      },
      "parentId": "147843683727",
      "paneIndex": 2
  },
  {
      "id": "147842690392",
      "item": {
          "name": "Inside Scans",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:11.202",
          "itemCount": 0
      },
      "parentId": "147843732032",
      "paneIndex": 2
  },
  {
      "id": "147844291495",
      "item": {
          "name": "Scan's",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T05:01:58.094",
          "itemCount": 0
      },
      "parentId": "147843732032",
      "paneIndex": 2
  },
  {
      "id": "147843522497",
      "item": {
          "name": "NDIS Images",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:06.861",
          "itemCount": 0
      },
      "parentId": "147842971317",
      "paneIndex": 2
  },
  {
      "id": "147842857275",
      "item": {
          "name": "Body Chart Images",
          "isFolder": true,
          "fileSize": 0,
          "fileType": "folder",
          "expirationTime": 0,
          "isStarred": false,
          "modifiedAt": "2021-10-13T04:43:07.935",
          "itemCount": 0
      },
      "parentId": "147842971317",
      "paneIndex": 2
  }
];

const folderId = '147843683727';

const fileNames = [];
let folderName = '';
folders.forEach((f)=>{
  if(f.parentId === folderId)
    fileNames.push(f.item.name);
  
  if(f.id === folderId)
    folderName = f.item.name;
  
})

console.log('>> folders',folders);
console.log('>> fileNames',fileNames,folderName);