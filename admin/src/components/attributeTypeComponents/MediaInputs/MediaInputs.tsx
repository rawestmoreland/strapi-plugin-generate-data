import React from 'react';
import { Box } from '@strapi/design-system/Box';
import { GridItem } from '@strapi/design-system/Grid';
import { Flex } from '@strapi/design-system/Flex';
import { Checkbox } from '@strapi/design-system/Checkbox';
import { NumberInput } from '@strapi/design-system/NumberInput';
import { GeneralProps } from '../types';
interface Props extends GeneralProps {
	onChangeValue: (key: string, field: string) => void;
	values: { width: number; height: number; min: number; max: number };
}

const MediaInputs = ({
	attribute,
	attributeKey,
	checked,
	disabled,
	values,
	onChangeCheck,
	onChangeValue,
}: Props) => {
	const allowedImages = attribute.allowedTypes.includes('images');
	return (
		<GridItem col={12}>
			<Box marginBottom='8px'>
				<Box marginBottom='12px'>
					<Checkbox
						disabled={disabled}
						onChange={onChangeCheck(attributeKey)}
						checked={checked}>
						{`${attributeKey} (Field type: Media) Allowed types: ${attribute.allowedTypes.join(
							', '
						)}`}
					</Checkbox>
				</Box>
				{allowedImages && (
					<Flex gap='16px'>
						<Box flex='1'>
							<NumberInput
								name=''
								disabled={!checked}
								onValueChange={onChangeValue(
									attributeKey,
									'width'
								)}
								// @ts-ignore
								value={values.width}
								label={`width (px) for images`}></NumberInput>
						</Box>
						<Box flex='1'>
							<NumberInput
								name=''
								disabled={!checked}
								onValueChange={onChangeValue(
									attributeKey,
									'height'
								)}
								// @ts-ignore
								value={values.height}
								label={`height (px) for images`}></NumberInput>
						</Box>
					</Flex>
				)}
				{attribute.multiple && (
					<Flex marginTop='12px' gap='16px'>
						<Box flex='1'>
							<NumberInput
								name=''
								disabled={!checked}
								onValueChange={onChangeValue(
									attributeKey,
									'min'
								)}
								// @ts-ignore
								value={values.min}
								label={`Count min`}></NumberInput>
						</Box>
						<Box flex='1'>
							<NumberInput
								name=''
								disabled={!checked}
								onValueChange={onChangeValue(
									attributeKey,
									'max'
								)}
								// @ts-ignore
								value={values.max}
								label={`Count max`}></NumberInput>
						</Box>
					</Flex>
				)}
			</Box>
		</GridItem>
	);
};
export default MediaInputs;
