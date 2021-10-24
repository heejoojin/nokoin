from web3 import Web3
import os

print('python script running ...')

w3 = Web3(Web3.HTTPProvider('https://kovan.infura.io/v3/c52c215e4d6a4286811feb38afa47ff4'))

person1_address = '0x4ae2bC565c55299FAb1AAFc6F0AFd63d7e03ce15'
person2_address = '0x4BFDE6Fc70A02da2C6fbCAb715b6f75705be1a4f'

priv_key = 'ddf7b511516eb5923b8301210af7e9a8fc9b4dda453b7abe3c97de4b52dd95d1'

add1 = Web3.toChecksumAddress(person1_address)
add2 = Web3.toChecksumAddress(person2_address)

nonce = w3.eth.getTransactionCount(add1)

tx = {
    'nonce': nonce,
    'to': add2,
    'value': w3.toWei(.0002, 'ether'),
    'gas': 21000,
    'gasPrice': w3.toWei(40, 'gwei')
}

signed_tx = w3.eth.account.sign_transaction(tx, priv_key)
hashed_tx = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
print(hashed_tx)