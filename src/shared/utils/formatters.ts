

const cepNumberRegexExp = /^(\d{5})-*(\d{3})+?$/

const cpfOrCnpjRegexExp = /(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})|(\d{3}\.\d{3}\.\d{3}-\d{2})/

const cpfRegexExp = /(\d{3}\.\d{3}\.\d{3}-\d{2})/

const telefoneRegexExp = /\(\d{2}\)\s*\d{4}-\d{4}/

const celularRegexExp = /\(\d{2}\)\s*\d{5}-\d{4}/

const passwordRegexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/

const removeSpecialChars = (value: string): string => {
  return value ? value.replace(/[^\w\s]/gi, '') : ''
}

const unmaskForNumber = (value: string): string => {
  return value ? value.replace(/\D/gi, '') : ''
}

const cepMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})(\d+?)$/, '$1')
}

const horaMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/^(2)[456789]$/g, '$1')
    .replace(/^([3456789])$/g, '0$1')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(:\d{2})(\d+?)$/, '$1')
    .replace(/(:[6789])$/, '')
}

export const padTo2Digits = (num: number): string => num.toString().padStart(2, '0')

export const formatDate = (date: Date): string =>
  [(padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear())].join('/')

export const removeHoursFromStringDate = (date: string): string => date?.split(' ')[0]

export const newPercentMask = (value: string) => `${value}%`

// TO-DO refatorar maxAdtoTable para não utilizar mascara como validator
export const percentMask = (value: string): string => {
  if (value == null) return null
  return value
    .replace(/\D/g, '')
    .replace(/^0$/g, '')
    .replace(/^([1-9][0-9])[1-9]$/g, '$1')
    .replace(/^([1-9][1-9])[0-9]$/g, '$1')
    .replace(/^([2-9][0-9])[0-9]$/g, '$1')
    .replace(/^([0-9]{3})[0-9]+$/g, '$1')
}

const removeAgenciaMask = (agencia: string) => {
  if (agencia == null) return null
  return agencia.split('-')[0]
}

const agenciaMask = (codigo: string, digito: string): string => {
  if (codigo == null) return null
  return digito == null ? codigo.padStart(4, '0') : `${codigo.padStart(4, '0')}-${digito}`
}

const agenciaBancoMask = (value: string): string => {
  return value
    .replace(/[^0-9Xx]/g, '')
    .replace(/^(.{0,3})[Xx]/g, '$1')
    .replace(/([0-9]{4})([0-9Xx])/, '$1-$2')
    .replace(/^(.{6}).+$/, '$1')
}

const telefoneMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)$/, '$1')
}

const celularMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)$/, '$1')
}

const removeMoedaSpecialChars = (value: string): string => {
  if (value == null) return null
  return value
    .replace(/[A-Z]\s/gi, '')
    .replace(/r\$/gi, '')
    .replace(/\./, '')
    .replace(/,/, '.')
}

const removeSpecialPercentChars = (value: string): string => {
  if (value == null) return null
  return value
    .replace(/[A-Z]\s/gi, '')
    .replace('%', '')
    .replace(/\./, '')
    .replace(/,/, '.')
}

// TO-DO criar mascara para moeda com valor negativo

// Usar com inputs
const inputMoneyMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
    .replace(/(.)/, 'R$ $1')
}

// Usar com valores fixos
const moneyMask = (value: number): string => {
  if (value == null) return ''
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)
}

export const weightMask = (value: number, suffix = 'kg') => {
  if (value == null) return null
  const formattedNumber = new Intl.NumberFormat('pt-BR').format(value)
  return `${formattedNumber} ${suffix}`
}

const maskCPForCNPJ = (value: string): string => {
  if (value == null) return
  const cpfCnpj = value.replace(/\D/g, '')
  if (cpfCnpj.length > 11) {
    return cpfCnpj
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }
  return cpfCnpj
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const maskCNPJ = (value: string): string => {
  if (value == null) return ''
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const maskCPF = (value: string): string => {
  if (value == null) return ''
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}
const validaCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '')
  let soma = 0
  let resto = 0

  if (cpf.match(/^(?:(\d)\1{10})$|(\D)|^(\d{12,})$|^(\d{0,10})$/g)) return false

  for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpf.substring(9, 10))) return false

  soma = 0
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpf.substring(10, 11))) return false
  return true
}

const validaCNPJ = (cnpj: string) => {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  // Valida a quantidade de caracteres
  if (cnpj.length !== 14) return false

  // Elimina inválidos com todos os caracteres iguais
  if (/^(\d)\1+$/.test(cnpj)) return false

  // Cáculo de validação
  const t = cnpj.length - 2,
    d = cnpj.substring(t),
    d1 = parseInt(d.charAt(0)),
    d2 = parseInt(d.charAt(1)),
    calc = (x: any) => {
      // eslint-disable-next-line prefer-const
      let n: any = cnpj.substring(0, x),
        y = x - 7,
        s = 0,
        r = 0

      for (let i = x; i >= 1; i--) {
        s += n.charAt(x - i) * y--
        if (y < 2) y = 9
      }

      r = 11 - (s % 11)
      return r > 9 ? 0 : r
    }

  return calc(t) === d1 && calc(t + 1) === d2
}

const validaCpfCnpj = (cpfCnpj: string) => {
  const cpfCnpjParsed = removeSpecialChars(cpfCnpj)
  if (cpfCnpjParsed.length === 11) {
    return validaCPF(cpfCnpjParsed)
  } else {
    return validaCNPJ(cpfCnpjParsed)
  }
}

const convertMaskPercent = (value: string, input: any) => {
  const matchData = value.match(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,4})?$)/) != null
  return matchData ? (input.target.value = value) : (input.target.value = '')
}

const formataPercentual = (value?: number, placesAfterComma = 4): string => {
  return value !== 0 && !value ? '-' : `${value.toFixed(placesAfterComma).replace('.', ',')} %`
}

const formataValorMilhar = (value: any, placesAfterComma = 4, prefix?: string, suffix?: string) => {
  if (!value) return null
  if (typeof value === 'string') return value
  const valueSplited = value.toFixed(placesAfterComma).split('.')
  return `${prefix ? `${prefix} ` : ''}${Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 0,
  }).format(Number(valueSplited[0]))},${valueSplited[1]}${suffix ? ` ${suffix}` : ''}`
}

export {
  agenciaBancoMask, agenciaMask, celularMask, celularRegexExp, cepMask, cepNumberRegexExp, convertMaskPercent, cpfOrCnpjRegexExp,
  cpfRegexExp, formataPercentual,
  formataValorMilhar, horaMask, inputMoneyMask, maskCNPJ,
  maskCPF, maskCPForCNPJ, moneyMask, passwordRegexExp, removeAgenciaMask, removeMoedaSpecialChars, removeSpecialChars, removeSpecialPercentChars, telefoneMask, telefoneRegexExp, unmaskForNumber, validaCNPJ, validaCPF, validaCpfCnpj
}

