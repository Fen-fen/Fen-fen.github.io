module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin$/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more0$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more1$/,
      respondwith: './livelist-more0.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more2$/,
      respondwith: './livelist-more1.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more3$/,
      respondwith: './livelist-more2.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more4$/,
      respondwith: './livelist-more3.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh0$/,
      respondwith: './livelist-refresh.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh1$/,
      respondwith: './livelist-refresh0.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh2$/,
      respondwith: './livelist-refresh1.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh3$/,
      respondwith: './livelist-refresh2.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh4$/,
      respondwith: './livelist-refresh3.json'
    },
    {
      pattern: /\/api\/getLiveDetail.php\?id=1$/,
      respondwith: './detail.json'
    },
    {
      pattern: /\/api\/getLiveDetail.php\?id=2$/,
      respondwith: './detail2.json'
    }
  ]
};
